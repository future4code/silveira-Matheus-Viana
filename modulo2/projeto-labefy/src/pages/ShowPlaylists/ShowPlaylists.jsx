import React from 'react';
import axios from 'axios';
import styled from "styled-components";

import { BASE_URL } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';

const ContainerPage = styled.div`
  padding: 20px;
`;

const ContainerBreadCrumb = styled.div`
  display: flex;
  align-items: center;
`;

const BreadCrumb = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  background-color: white;
  color: #0066ff;
  border: 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  :hover{
    opacity: 0.7;
    background-color: transparent;
    color: white;
  }
  :active{
    transform: translateY(-3px);
  }
`;

const ButtonCreate = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  background-color: transparent;
  color: white;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.8;
  margin-left: 15px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  i{
    font-size: 20px;  
  }
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    opacity: 1;
    background-color: white;
    color: #0066ff;
  }  
  :active{
    transform: translateY(-3px);
  }
`;

const PageTitle = styled.h2`
  border: 1px outset white;
  padding: 15px 0;
  opacity: 0.8;
  width: 100%;
  text-align: center;  
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

/* GRID */

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3,1fr);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
`;

const CardPlaylist = styled.li`
  background-color: white;
  width: 100%;
  height: 80px;
  box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.75);
  color: black;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border: 1px outset #0066ff84;
  :active{
    transform: translateY(-3px);
  border: 1px inset #0066ff84;
  }
`;

const CardPlaylistName = styled.div`
  background-color: white;
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
  :hover{    
    background-color: #0066ff84;
    opacity: 0.8;
    color: white;
  }
`;

const DeleteButton = styled.button`
  background-color: #0066ff84;
  height: 100%;
  width: 15%;
  border: 0;
  cursor: pointer;
  opacity: 0.5;
  i{
    font-size: 18px;
    color: red;
  }
  :hover{    
    background-color: #0066ffa2;
    opacity: 1;
    i{      
      transform: scale(1.2);
    }
  }
  :active{
    opacity: 0.8;
  }
`;



export default class ShowPlaylists extends React.Component {

  state = {
    playlists: []
  }
  
  componentDidMount(){
    this.getAllPlaylists();
  }

  getAllPlaylists = async() => {      
    try{
      const res = await axios.get(BASE_URL, HEADERS);
      this.setState({playlists: res.data.result.list});
    }catch (error){
      alert("Não foi possível carregar as playlists cadastradas. Tente novamente em alguns instantes!");
    }
  }

  onClickDeletePlaylist = (playlistId) => {

    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
      .delete(`${BASE_URL}/${playlistId}`, HEADERS)
      .then((res) => {
        alert("Playlist deletada com sucesso!");          
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    }
  } 


  render() {

    const componentsPlaylist = this.state.playlists.map((playlist) => {
      return <CardPlaylist key={playlist.id}><CardPlaylistName onClick={() => {this.props.goToDetailsPlaylist(playlist.id, playlist.name)}}>{playlist.name}</CardPlaylistName> <DeleteButton onClick={() => {this.onClickDeletePlaylist(playlist.id)}}><i className="far fa-trash-alt"></i></DeleteButton></CardPlaylist>
    });

    return (
      <ContainerPage>
        <ContainerBreadCrumb>
          <BreadCrumb onClick={() => {this.props.onClickShowPlaylist("showPlaylist")}}>Playlists</BreadCrumb>
          <ButtonCreate onClick={() => {this.props.onClickCreatePlaylist("createPlaylist")}}><i className="fas fa-plus"></i></ButtonCreate>
        </ContainerBreadCrumb>
        <PageTitle>
          Playlists
        </PageTitle>


        <ContainerGrid>
          {componentsPlaylist}
        </ContainerGrid>

        



        
      </ContainerPage>
    );
  }
}

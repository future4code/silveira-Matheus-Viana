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
  opacity: 0.7;
  background-color: transparent;
  color: white;
  border: 0;  
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  :hover{
    opacity: 1;
    background-color: white;
    color: #0066ff;
  }
  :active{
    transform: translateY(-3px);
  }
`;

const ButtonCreate = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  background-color: white;
  color: #0066ff;
  border: 0;
  margin-left: 15px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  i{
    font-size: 20px;  
  }
  :hover{
    opacity: 0.8;
    background-color: transparent;
    color: white;
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

const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 10px;
  border: 0;
  font-size: 16px;
  border-radius: 10px;
`;

const ButtonForm = styled.button`
  background-color: #a4e2a4;
  margin-top: 15px;
  width: 40px;
  height: 40px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  i{
    color: white;
    font-size: 20px;
  }
  :hover{
    opacity: 0.8;
    background-color: #79d179;
    i{
      color: white;
    }
  }  
  :active{
    transform: translateY(-3px);
  }
`;

export default class CreatePlaylist extends React.Component {

  state = {
    playlistName: "",
  }
  
  handlePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value });
  };

  createPlaylist = async() => {    
    const body = {
      name: this.state.playlistName 
    }

    if(this.state.playlistName !== ''){
      try{
        await axios.post(BASE_URL, body, HEADERS);        
        alert("Playlist cadastrada com sucesso!");
        this.setState({ playlistName: '' });
        this.props.onClickShowPlaylist("showPlaylists")
      }catch (error){
        if(error.response.data.message === 'There already is a playlist with a similiar name.'){        
          alert("Já existe uma playlist com este nome");
        }
      }
    }else{
      alert("É necessário digitar um nome para a sua playlist.");
    }
  }

  render() {
    return (
      <ContainerPage>
        
        <ContainerBreadCrumb>
          <BreadCrumb onClick={() => {this.props.onClickShowPlaylist("showPlaylist")}}>Playlists</BreadCrumb>
          <ButtonCreate onClick={() => {this.props.onClickCreatePlaylist("createPlaylist")}}><i class="fas fa-plus"></i></ButtonCreate>
        </ContainerBreadCrumb>
        <PageTitle>
          Criar Nova Playlist
        </PageTitle>
        <PageContent>
          <InputForm
            placeholder='Nome da Playlist'          
            value={this.state.playlistName}
            onChange={this.handlePlaylistName}
          />
          <ButtonForm onClick={this.createPlaylist}><i class="far fa-save"></i></ButtonForm>
        </PageContent>
      </ContainerPage>
    );
  }
}

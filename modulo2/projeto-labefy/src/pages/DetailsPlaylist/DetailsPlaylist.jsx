import React from 'react';
import axios from 'axios';
import styled from "styled-components";

import { BASE_URL } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';
import AddMusicToPlaylist from '../../components/AddMusicToPlaylist/AddMusicToPlaylist';

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


const CardTitle = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px outset white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  opacity: 0.8;
`;

const PageTitle = styled.h2`
  text-align: center;  
  width: 95%;
`;

const AddButton = styled.button`
  width: 5%;
  background-color: #ffffff;
  height: 100%;
  border: 0;
  cursor: pointer;
  i{
    font-size: 22px;
    color: #a4e2a4;
  }
  :hover{    
    background-color: white;
    opacity: 1;
    i{      
      transform: scale(1.3);
    }
  }
  :active{
    opacity: 0.8;
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3,1fr);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
`;

const CardMusic = styled.li`
  background-color: white;
  width: 100%;
  min-height: 90px;
  height: auto;
  box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.75);
  color: black;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border: 1px outset #0066ff84;
  :active{
    /* transform: translateY(-3px); */
  border: 1px inset #0066ff84;
  }
  audio::-webkit-media-controls-panel {
    background-color: white;
  }
  audio::-webkit-media-controls-mute-button {
    background-color: transparent;
    border-radius: 50%;
  }
  audio::-webkit-media-controls-current-time-display {
    color: #0066ff;
  }
  audio::-webkit-media-controls-time-remaining-display {
    color: #0066ff;
  }
`;

const ContainerMusic = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MusicName = styled.span`
  font-size: 16px;
  margin-top: 10px;
  width: 90%;
  text-align: center;
`;

const DeleteButton = styled.button`
  background-color: #0066ff84;
  height: 100%;
  width: 10%;
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


export default class DetailsPlaylist extends React.Component {

  state = {
    detailsPlaylist: [],
    addingMusic: false,
    musicName: "",
    artistName: "",
    musicUrl: ""
  }
  
  componentDidMount(){
    this.getPlaylistTracks();
  }

  getPlaylistTracks = async() => {     
    try{
      const res = await axios.get(`${BASE_URL}/${this.props.idPlaylist}/tracks`, HEADERS);
      this.setState({detailsPlaylist: res.data.result.tracks});
    }catch (error){
      alert("Não foi possível carregar as informações solicitadas. Tente novamente mais tarde!");
    }
  }

  onClickAddMusic = () => {
    this.state.addingMusic === false ? this.setState({addingMusic: true}) : this.setState({addingMusic: false})
  } 

  getMusicName = (musicName) => {
    this.setState({ musicName: musicName });
  };

  getArtistName = (artistName) => {
    this.setState({ artistName: artistName });
  };

  getMusicUrl = (musicUrl) => {
    this.setState({ musicUrl: musicUrl });
  };
  
  onClickAddTrackToPlaylist = async() => { 
     const body = {
      name: this.state.musicName,
      artist: this.state.artistName,
      url: this.state.musicUrl 
    }

    try{
      const res = await axios.post(`${BASE_URL}/${this.props.idPlaylist}/tracks`, body, HEADERS);
      this.getPlaylistTracks();
      this.setState({addingMusic: false});
      alert('Música adicionada com sucesso!')
    }catch (error){
      alert("Não foi possível adicionar música na playlist. Tente novamente mais tarde!");
    }
  }

  onClickRemoveTrackFromPlaylist = async(musicID) => { 
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      try{
        const res = await axios.delete(`${BASE_URL}/${this.props.idPlaylist}/tracks/${musicID}`, HEADERS);
        this.getPlaylistTracks();
        alert('Música deletada com sucesso!');
      }catch (error){
        alert("Não foi possível deletar música da playlist. Tente novamente mais tarde!");
      }
    }
  }

  render() {

    const componentsMusic = this.state.detailsPlaylist.map((music) => {
      return (
        <CardMusic key={music.id}>
          <ContainerMusic>
            <MusicName>{music.artist} - {music.name}</MusicName>
            <audio id='musicPlayer' controls="controls">
            <source src={music.url} type="audio/mp3" />
            seu navegador não suporta HTML5
            </audio>
          </ContainerMusic>
        
        <DeleteButton onClick={() => {this.onClickRemoveTrackFromPlaylist(music.id)}}><i className="far fa-trash-alt"></i></DeleteButton>
      </CardMusic>
      )
    });

    return (

      <ContainerPage>

        <ContainerBreadCrumb>
          <BreadCrumb onClick={() => {this.props.onClickShowPlaylist("showPlaylist")}}>Playlists</BreadCrumb>
        </ContainerBreadCrumb>
        
        <CardTitle>
          <PageTitle>
            {this.props.namePlaylist}
          </PageTitle>
          <AddButton onClick={this.onClickAddMusic}><i className="fas fa-plus"></i></AddButton>
        </CardTitle>
                
        {this.state.addingMusic && <AddMusicToPlaylist getMusicName={this.getMusicName} getArtistName={this.getArtistName} getMusicUrl={this.getMusicUrl} onClickAddTrackToPlaylist={this.onClickAddTrackToPlaylist}/>}
        
        <ContainerGrid>
          {componentsMusic}
        </ContainerGrid>      

      </ContainerPage>

    );
  }
}

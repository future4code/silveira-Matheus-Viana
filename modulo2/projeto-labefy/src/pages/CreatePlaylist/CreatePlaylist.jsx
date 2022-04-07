import axios from 'axios';
import React from 'react';

import { BASE_URL } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';


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
      <div>
        <h2>Criar Playlist</h2>
        <input
          placeholder='Nome da Playlist'          
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylist}>Enviar</button>
        <p>{this.state.playlists}</p>
      </div>
    );
  }
}

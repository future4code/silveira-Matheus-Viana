import axios from 'axios';
import React from 'react';

import { BASE_URL } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';


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
      return <li key={playlist.id}><span onClick={() => {this.props.goToDetailsPlaylist(playlist.id, playlist.name)}}>{playlist.name}</span> <button onClick={() => {this.onClickDeletePlaylist(playlist.id)}}>x</button></li>
    });

    return (
      <div>
        <h2>Visualizar Playlists</h2>
        <ul>
          {componentsPlaylist}
        </ul>
      </div>
    );
  }
}

import axios from 'axios';
import React from 'react';

import { BASE_URL } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';
import AddMusicToPlaylist from '../../components/AddMusicToPlaylist/AddMusicToPlaylist';


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
      console.log(res)
      this.getPlaylistTracks();
      /* const newDetailsPlaylist = [...this.state.detailsPlaylist, res.data.result]
      this.setState({
        detailsPlaylist: newDetailsPlaylist,
        musicName: "",
        artistName: "",
        musicUrl: "",
        addingMusic: false
      }); */
      alert('Música adicionada com sucesso!')
    }catch (error){
      alert("Não foi possível adicionar música na playlist. Tente novamente mais tarde!");
    }
  }








  render() {

    const componentsMusic = this.state.detailsPlaylist.map((music) => {
      return <li key={music.id}>{music.artist} - {music.name}</li>
    });

    return (
      <div>
        <h2>Detalhes da Playlist</h2>
        <h3>{this.props.namePlaylist}</h3>
        <ul>
          {componentsMusic}
        </ul>
        <button onClick={this.onClickAddMusic}>+</button>
        {this.state.addingMusic && <AddMusicToPlaylist getMusicName={this.getMusicName} getArtistName={this.getArtistName} getMusicUrl={this.getMusicUrl} onClickAddTrackToPlaylist={this.onClickAddTrackToPlaylist}/>}
      </div>
    );
  }
}

import React from 'react';

export default class AddMusicToPlaylist extends React.Component {

  state = {
    musicName: "",
    artistName: "",
    musicUrl: ""
  }
  
  handleMusicName = (e) => {
    this.setState({ musicName: e.target.value });
    this.props.getMusicName(e.target.value);
  };

  handleArtistName = (e) => {
    this.setState({ artistName: e.target.value });
    this.props.getArtistName(e.target.value);
  };

  handleMusicUrl = (e) => {
    this.setState({ musicUrl: e.target.value });
    this.props.getMusicUrl(e.target.value);
  };

  render() {

    return (
      <div>
        <h2>Adicionar Música a Playlist</h2>
        <input
          value={this.state.musicName}
          onChange={this.handleMusicName}
          placeholder="Nome da música"
        />
        <input
          value={this.state.artistName}
          onChange={this.handleArtistName}
          placeholder="Nome do artista"
        />
        <input
          value={this.state.musicUrl}
          onChange={this.handleMusicUrl}
          placeholder="URL da música"
        />
        <button onClick={this.props.onClickAddTrackToPlaylist}>Salvar</button>
        
      </div>
    );
  }
}




/* 

musicName={this.state.musicName} 
artistName={this.state.artistName} 
musicUrl={this.state.musicUrl} 

*/
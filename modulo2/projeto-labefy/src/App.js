import React from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import ShowPlaylists from "./pages/ShowPlaylists/ShowPlaylists";
import DetailsPlaylist from "./pages/DetailsPlaylist/DetailsPlaylist";
import AddMusicToPlaylist from "./components/AddMusicToPlaylist/AddMusicToPlaylist";

import Header from "./components/Header/Header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

export default class App extends React.Component {
  state = {
    page: "showPlaylists" /* home é o valor padrão */,
    idPlaylist: "",
    namePlaylist: ""
  };

  changePage = (namePage) => {
    this.setState({ page: namePage });
  };

  choosePage = () => {
    switch (this.state.page) {
      case "home":
        return <Home changePage={this.changePage} />;
      case "createPlaylist":
        return <CreatePlaylist changePage={this.changePage} />;
      case "showPlaylists":
        return (
          <ShowPlaylists
            changePage={this.changePage}
            goToDetailsPlaylist={this.goToDetailsPlaylist}
            namePlaylist={this.state.namePlaylist}
          />
        );
      case "detailsPlaylist":
        return (
          <DetailsPlaylist
            changePage={this.changePage}
            idPlaylist={this.state.idPlaylist}
            namePlaylist={this.state.namePlaylist}
          />
        );
      case "AddMusicToPlaylist":
        return (
          <AddMusicToPlaylist
            changePage={this.changePage}
          />
        );
      default:
        return <Home changePage={this.changePage} />;
    }
  };

  goToDetailsPlaylist = (id, name) => {
    this.setState({
      page: "detailsPlaylist",
      idPlaylist: id,
      namePlaylist: name
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle  />
        <div><Header /></div>
        <button
          onClick={() => {
            this.changePage("home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            this.changePage("createPlaylist");
          }}
        >
          Criar Playlist
        </button>
        <button
          onClick={() => {
            this.changePage("showPlaylists");
          }}
        >
          Visualizar Playlists
        </button>
        {this.choosePage()}
      </div>
    );
  }
}

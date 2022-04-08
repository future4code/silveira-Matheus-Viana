import React from "react";
import styled from "styled-components";
import "./App.css";

import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import ShowPlaylists from "./pages/ShowPlaylists/ShowPlaylists";
import DetailsPlaylist from "./pages/DetailsPlaylist/DetailsPlaylist";
import AddMusicToPlaylist from "./components/AddMusicToPlaylist/AddMusicToPlaylist";

import Header from "./components/Header/Header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";

const LayoutPage = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 60px 1fr 40px;
`;

const ContainerContent = styled.div`
  /* grid-row: 2/3; */
`;

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
      case "createPlaylist":
        return (
          <CreatePlaylist
            changePage={this.changePage}
            onClickShowPlaylist={this.changePage}
          />
        );
      case "showPlaylists":
        return (
          <ShowPlaylists
            changePage={this.changePage}
            goToDetailsPlaylist={this.goToDetailsPlaylist}
            namePlaylist={this.state.namePlaylist}
            onClickCreatePlaylist={this.changePage}
            onClickShowPlaylist={this.changePage}
          />
        );
      case "detailsPlaylist":
        return (
          <DetailsPlaylist
            changePage={this.changePage}
            idPlaylist={this.state.idPlaylist}
            namePlaylist={this.state.namePlaylist}
            onClickShowPlaylist={this.changePage}
          />
        );
      case "AddMusicToPlaylist":
        return (
          <AddMusicToPlaylist
            changePage={this.changePage}
          />
        );
      default:
        return (
          <ShowPlaylists
            changePage={this.changePage}
            goToDetailsPlaylist={this.goToDetailsPlaylist}
            namePlaylist={this.state.namePlaylist}
            onClickCreatePlaylist={this.changePage}
          />
        );
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
      <>
        <GlobalStyle />
        <LayoutPage>
          <Header
            onClickHome={this.changePage}
            onClickCreatePlaylist={this.changePage}
            onClickShowPlaylist={this.changePage}
          />
          <ContainerContent>
            {this.choosePage()}
          </ContainerContent>
          <Footer />
        </LayoutPage>
      </>
    );
  }
}

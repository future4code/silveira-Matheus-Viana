import React from 'react';
import styled from "styled-components";


const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px outset white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  background-color: white;
  margin-bottom: 20px;

  @media screen and (max-width: 768px){
    justify-content: center;
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }

`;

const Icone = styled.div`
  font-size: 26px;
  color: #0066ff;

  @media screen and (max-width: 768px){
    margin-bottom: 10px;
  }
`;

const InputForm = styled.input`
  width: 25%;
  height: 40px;
  padding: 0 12px;
  border: 0;
  font-size: 16px;
  border-radius: 10px;
  background-color: #0066ff;
  color: white;
  ::placeholder {
    color: white;
    opacity: 0.7;
  }
  @media screen and (max-width: 768px){
    width: 80%;
    margin-bottom: 10px;
  }
`;


const ButtonForm = styled.button`
  background-color: #a4e2a4;
  width: 35px;
  height: 35px;
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
  @media screen and (max-width: 768px){
    margin-top: 10px;
  }
`;

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
      <Card>
        <Icone>
          <i class="fas fa-music"></i>
        </Icone>
        <InputForm
          value={this.state.musicName}
          onChange={this.handleMusicName}
          placeholder="Nome da m??sica"
        />
        <InputForm
          value={this.state.artistName}
          onChange={this.handleArtistName}
          placeholder="Nome do artista"
        />
        <InputForm
          value={this.state.musicUrl}
          onChange={this.handleMusicUrl}
          placeholder="URL da m??sica"
        />
        <ButtonForm onClick={this.props.onClickAddTrackToPlaylist}><i class="far fa-save"></i></ButtonForm>
        
      </Card>
    );
  }
}
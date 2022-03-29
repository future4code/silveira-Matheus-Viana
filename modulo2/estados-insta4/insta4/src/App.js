import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormularioPostar = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 10px;
  padding: 0 10px 10px 10px;  
  input {
    padding: 10px 5px 10px 8px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    font-size: 16px;
    width: 300px;
  }
  input:active {
    background-color: rgba(130,130,130,0.1);
  }
  button{
    background-color: #aaa;
    color: white;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    width: 100px;
    font-size: 15px;
  }
  button:hover{
    background-color: #ccc;
  }
  button:active{
    background-color: #bbb;
  }
`

const Titulo = styled.h2`
  color: rgb(90,90,90);
  padding: 5px 20px;
  background-color: rgb(240,240,240);
  border-radius: 10px;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'alessandro',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'juliana',
        fotoUsuario: 'https://picsum.photos/50/54',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    inputUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  };


  criarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const atualizarPost = [novoPost, ...this.state.posts]
    this.setState({
      posts: atualizarPost
    })
  }

  onChangeInputUsuario = (e) => {
    console.log(e.target.value);
    this.setState({
      inputUsuario: e.target.value
    })
  }

  onChangeInputFotoUsuario = (e) => {
    this.setState({
      inputFotoUsuario: e.target.value
    })
  }

  onChangeInputFotoPost = (e) => {
    this.setState({
      inputFotoPost: e.target.value
    })
  }


  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          {...post}
        />
      );
    });

    const ContainerFormularioPostar = [
      <FormularioPostar>
        <input 
          placeholder='Usuário'
          value={this.state.inputUsuario}
          onChange={this.onChangeInputUsuario}
        />
        <input 
          placeholder='Link da foto do usuário'
          value={this.state.inputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
        />
        <input 
          placeholder='Link da foto do post'
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
        />
        <button onClick={this.criarPost}>Postar</button>
      </FormularioPostar>
    ]

    return (
      <MainContainer>
        <Titulo>Criar novos posts: </Titulo>
        {ContainerFormularioPostar}  
        <Titulo>Posts Recentes: </Titulo>
        {listaDePosts}    
      </MainContainer>
    );
  }
}

export default App;

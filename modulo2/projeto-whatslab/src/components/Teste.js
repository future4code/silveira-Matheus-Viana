import React from "react";
import styled from 'styled-components';

import GlobalStyle from "./GlobalStyle";

const ContainerApp = styled.div `
  display: flex;
  justify-content: center;
  max-width: 650px;
  background-color: aqua;
  height: 100%;
`;

const ContainerMensagens = styled.div`
    width: 100%;
    padding: 0 20px;
    background-color: blue;
    display: flex;
    align-items: flex-end;
    /* width: 100%;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    text-align: justify;
    background-color: red;
    height: 200px; */
`;

const Mensagem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: justify;
  h2{
    margin-right: 10px;
    font-size: 16px;
  }
  p{    
    font-size: 16px;
  }  
`;


const ContainerFormulario = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    text-align: justify;
    height: 20px;
    /* background-color: blue; */
    form{
      display: grid;
      grid-template-columns: 15% 1fr 10%;
      width: 100%;
      background-color: blue;
      border: none;
      font-size: 16px;
      input{        
        padding: 5px;
        border: 1px solid #ccc;
      }
      button{
        padding: 5px;
        border: 1px solid #ccc;
      }
    }
`;



class Teste extends React.Component {

  state = {
    mensagens: [
      {
        usuario: 'Matheus',
        mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo odio quis velit ultrices gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas dapibus libero in justo ultrices dapibus. Cras sit amet porttitor mauris. Ut quis convallis ligula. Aliquam non elit quam. '
      },
      {
        usuario: 'Estefânia',
        mensagem: 'Olá, tudo bem e você?'
      }
    ],
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaMensagem = () => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novasmensagens = [...this.state.mensagens, novaMensagem];

    this.setState({ mensagens: novasmensagens });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    
    const listaDeComponentes = this.state.mensagens.map((mensagens) => {
      return (    
          <ContainerApp>
            <ContainerMensagens>
              <Mensagem>
                <h2>{mensagens.usuario}: </h2>
                <p>{mensagens.mensagem}</p>
              </Mensagem>
            </ContainerMensagens>
          </ContainerApp>        
      );
    });

    return (

      <>
        <GlobalStyle/>
        <div>{listaDeComponentes}</div>
        <ContainerApp>
            <ContainerFormulario>
              <form>
                <input
                  value={this.state.valorInputUsuario}
                  onChange={this.onChangeInputUsuario}
                  placeholder={"Usuário"}
                />
                <input
                  value={this.state.valorInputMensagem}
                  onChange={this.onChangeInputMensagem}
                  placeholder={"Mensagem"}
                />
                <button onClick={this.adicionaMensagem}>Enviar</button>
              </form>
            </ContainerFormulario>
          </ContainerApp> 
      </>

    );
  }
}

export default Teste;

import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';


const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 650px;
    min-height: calc(100vh - 2px);
    border: 1px solid black;
    /* border-left: 1px solid black;
    border-right: 1px solid black; */
`;

const ContainerMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 94%;
  height: 95%;
  padding: 3%;
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

const FormularioMensagens = styled.div`
  width: 100%;
  min-height: 30px;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  input{    
    height: 30px;
    padding-left: 6px;
  }
  input:nth-of-type(1){
    grid-column: 1 / 2;
  }
  input:nth-of-type(2){
    grid-column: 2 / 3;
  }
  button{
    grid-column: 3 / 4;
  }
`;

class FormularioMensagem extends React.Component{

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

  EnviaMensagem = () => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novasmensagens = [...this.state.mensagens, novaMensagem];

    this.setState({ mensagens: novasmensagens, usuario: "", mensagem: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render(){

    const listaDeMensagens = this.state.mensagens.map((mensagens) => {
      return (    
        <Mensagem>
          <h2>{mensagens.usuario}: </h2>
          <p>{mensagens.mensagem}</p>
        </Mensagem>      
      );
    });

    return (

      <>
      <GlobalStyle/>
        <ContainerCenter>
          <ContainerApp>
            <ContainerMensagens>{listaDeMensagens}</ContainerMensagens>
            <FormularioMensagens>
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
              <button onClick={this.EnviaMensagem}>Enviar</button>
            </FormularioMensagens>
          </ContainerApp>
        </ContainerCenter>
      </>
    );


  }



}

export default FormularioMensagem;
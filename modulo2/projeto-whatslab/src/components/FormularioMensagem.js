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
    box-sizing: border-box;
    width: 650px;
    min-height: 100vh;
    border: 1px solid rgb(55, 166, 149);
    background-color: rgb(192, 252, 243);
`;

const ContainerMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 94%;
  height: 100%;
  box-sizing: border-box;
  padding: 3%;
`;

const Mensagem = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: justify;
  border-radius: 5px;
  background-color: white;
  padding: 0 20px;
  margin: 10px 0;
  width: auto;
  h2{
    margin-right: 10px;
    font-size: 16px;
  }
  p{    
    font-size: 16px;
    padding-right: 20px;
  }  
  button{
    color: white;
    background-color: rgba(220, 20, 60, 0.5);
    border-radius: 5px;
    border: 0;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  button:hover{
    background-color: crimson;
    color: white;
  }
  button:active{
    background-color: rgba(220, 20, 60, 0.5);
  }
`;

const FormularioMensagens = styled.form`
  width: 100%;
  min-height: 30px;
  display: grid;
  grid-template-columns: 20% 65% 15%;
  font-size: 16px;
  input{    
    height: 40px;
    padding-left: 6px;
    border-radius: 5px;
    border: 0;
  font-size: 16px;
  }
  input:nth-of-type(1){
    grid-column: 1 / 2;
    margin: 0 10px 10px 10px;
  }
  input:nth-of-type(2){
    grid-column: 2 / 3;
    margin-right: 10px;
  }
  button{
    cursor: pointer;
    font-size: 16px;
    grid-column: 3 / 4;
    margin: 0 10px 10px 0;
    border-radius: 5px;
    border: 0;
    color: rgb(55, 166, 149);
    font-weight: bold;
  }
  button:hover{
    background-color: rgb(55, 166, 149);
    color: white;
  }
  button:active{
    background-color: rgba(55, 166, 149, 0.5);
    color: white;
  }
`;

/* Função para não dar refresh na página ao clicar no submit */

  const handleSubmit = function(e) {
    e.preventDefault();
  }

class FormularioMensagem extends React.Component{

  state = {
    mensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  EnviaMensagem = () => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novasmensagens = [...this.state.mensagens, novaMensagem];

    if(this.state.valorInputUsuario !== '' && this.state.valorInputMensagem !== ''){
      this.setState({ mensagens: novasmensagens, valorInputMensagem: "" });
    }
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
        <Mensagem onSubmit={handleSubmit}>
          <div>
            <h2>{mensagens.usuario}: </h2>
            <p>{mensagens.mensagem}</p>
          </div>
          <button><i class="far fa-trash-alt"></i></button>
        </Mensagem>      
      );
    });

    return (

      <>
      <GlobalStyle/>
        <ContainerCenter>
          <ContainerApp>
            <ContainerMensagens>{listaDeMensagens}</ContainerMensagens>
            <FormularioMensagens onSubmit={handleSubmit}>
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
                <button type='submit' onClick={this.EnviaMensagem} ><i class="far fa-paper-plane"></i></button>
            </FormularioMensagens>
          </ContainerApp>
        </ContainerCenter>
      </>
    );


  }



}

export default FormularioMensagem;
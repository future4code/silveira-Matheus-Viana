import React from "react";
import axios from "axios";
import styled from "styled-components";

const BotaoVoltar = styled.button`
  margin: 15px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(0,0,0);
  color: white;
  cursor: pointer;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  i{
    margin-right: 6px;
  }
  :hover{
    background-color: rgba(0,0,0, 0.7);
  }
  :active{
    background-color: rgba(0,0,0, 0.9);
  }
`;

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 

const TituloPagina = styled.div`
  width: 100%;
  border: 2px dashed rgb(66, 129, 245);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(66, 129, 245);
`;

const ContainerInputForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const InputForm = styled.input`
  padding: 6px 10px;
  margin-bottom: 15px;
  width: 250px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid rgb(66, 129, 245);
`;

const BotaoEnviar = styled.button`
  margin: 15px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(66, 129, 245);
  color: white;
  cursor: pointer;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  i{
    margin-right: 6px;
  }
  :hover{
    background-color: rgba(66, 129, 245, 0.7);
  }
  :active{
    background-color: rgba(66, 129, 245, 0.9);
  }
`;

const urlBase =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "matheus-viana-silveira",
  },
};

export default class TelaCadastro extends React.Component {
    state = {
      telaAtual: "cadastro",
      inputNome: "",
      inputEmail: ""
    }

    onChangeInputNome = (event) => {
      this.setState({
        inputNome: event.target.value,
      });
    };

    onChangeInputEmail = (event) => {
      this.setState({
        inputEmail: event.target.value,
      });
    };

    postCreateUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(`${urlBase}`, body, headers)
      .then((res) => {
        this.setState({
          inputNome: "",
          inputEmail: ""
        });
        alert(
          `Usuário(a) ${body.name} foi cadastrado(a) com sucesso!`
        );
      })
      .catch((err) => {
        switch (err.response.data.message) {
          case "There is an user with this name or this email":
            alert("Já existe um usuário com este nome ou este email.");
            break;
          case "User information are missing. Name and email are required.":
            alert("Nome e Email são campos obrigatórios.");
            break;
        }
      });
  };

    render () {

        return (
            <div>
              <BotaoVoltar onClick={() => { this.props.irParaListaUsuarios()}}><i className="fas fa-users"></i> Listar Usuários Cadastrados</BotaoVoltar>
              
              <ContainerFlex>
                <TituloPagina>
                  <h1>Cadastro de Usuário</h1>
                </TituloPagina>

                <ContainerInputForm>
                  <InputForm
                    value={this.state.inputNome}
                    onChange={this.onChangeInputNome}
                    placeholder="Nome"
                  />
                  <InputForm
                    value={this.state.inputEmail}
                    onChange={this.onChangeInputEmail}
                    placeholder="Email"
                  />
                  <BotaoEnviar onClick={this.postCreateUser}><i className="fas fa-user"></i> Criar Usuário</BotaoEnviar>
                </ContainerInputForm>    
                
              </ContainerFlex>
            </div>
        )
    }
}
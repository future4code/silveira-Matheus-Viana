import React from "react";
import axios from "axios";
import styled from "styled-components";

const BotaoVoltar = styled.button`
  margin: 15px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(194, 160, 48);
  color: white;
  cursor: pointer;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  i{
    margin-right: 6px;
  }
  :hover{
    background-color: rgba(194, 160, 48, 0.7);
  }
  :active{
    background-color: rgba(194, 160, 48, 0.9);
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

const ContainerLista = styled.div`
  width: 100%;
`;

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const ItemLista = styled.li`
  list-style: none;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(66, 129, 245);

  span{
    color: rgb(255,0,0);
    cursor: pointer;
  }
`;

const urlBase =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "matheus-viana-silveira",
  },
};

class TelaListaUsuarios extends React.Component {
    state = {
      usuarios: []
    }

    componentDidMount(){
    axios
      .get(`${urlBase}`, headers)
      .then((res) => {
        this.setState({
          usuarios: res.data
        })
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    }    

    componentDidUpdate(){
      axios
        .get(`${urlBase}`, headers)
        .then((res) => {
          this.setState({
            usuarios: res.data
          })
        })
        .catch((err) => {
          console.log(err.response.data);
        });      
    }

    onClickDeleteUser = (id) => {

      if (window.confirm("Tem certeza de que deseja deletar?")) {
        axios
        .delete(`${urlBase}/${id}`, headers)
        .then((res) => {
          alert("O usuário foi deletado com sucesso!")
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      }
    }

    render () {

        const componentesUsuarios = this.state.usuarios.map((usuario) => {
          return <ItemLista key={usuario.id}>{usuario.name} <span onClick={() => this.onClickDeleteUser(usuario.id)}><i className="far fa-trash-alt"></i></span></ItemLista>
        });

        return (
            <div>
              <BotaoVoltar onClick={() => { this.props.mudarTelaAtual("cadastro")}}><i class="fas fa-arrow-left"></i> Voltar</BotaoVoltar>
              
              <ContainerFlex>
                <TituloPagina>
                  <h1>Usuários Cadastrados</h1>
                </TituloPagina>

              <ContainerLista>

                <Lista>
                  {componentesUsuarios}
                </Lista>

              </ContainerLista>
              
              </ContainerFlex>
            </div>
        )
    }
}

export default TelaListaUsuarios
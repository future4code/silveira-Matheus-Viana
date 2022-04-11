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
  margin-bottom: 20px;
`;

const ContainerDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const CardDetalhes = styled.div`
  border: 2px solid rgb(66, 129, 245);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 10px 20px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotaoDeletar = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 0;
  margin: 0 10px;
  i{
    color: rgb(255,0,0);
    cursor: pointer;
    font-size: 22px;
  }
`;

const BotaoEditar = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 0;
  margin: 0 10px;
  i{
    color: rgb(206, 195, 43);
    cursor: pointer;
    font-size: 22px;
  }
`;

const Detalhes = styled.p`
  font-size: 20px;
  font-weight: bold;
  span{
    font-weight: normal;
  }
`;

const ContainerEditar = styled.div`
  border: 2px solid rgb(66, 129, 245);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  /* padding: 0 20px 10px 20px; */
`;

const TituloEditar = styled.div`
  background-color: rgb(66, 129, 245);
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  h2{
    font-size: 20px;
    margin: 0;
    padding: 10px 0;
  }
  i{
    font-size: 16px;
  }
`;

const InputEditarNome = styled.input`
  padding: 6px 10px;
  margin: 10px;
  border: 1px solid rgb(66, 129, 245);
  border-radius: 5px;
  font-size: 18px;
`;

const InputEditarEmail = styled.input`
  padding: 6px 10px;
  margin: 0 10px 10px 10px;
  border: 1px solid rgb(66, 129, 245);
  border-radius: 5px;
  font-size: 18px;
`;

const BotaoSalvarEdicao = styled.button`
  margin-bottom: 10px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  i{
    color: rgb(28, 173, 26);
    font-size: 22px;
  }
`;

const urlBase =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "matheus-viana-silveira",
  },
};


export default class TelaDetalhesUsuario extends React.Component {  

  state = {
    detalhesUsuario: [],
    editando: false,
    inputNomeEditando: '',
    inputEmailEditando: ''
  }

  componentDidMount(){
    this.pegaDetallhesUsuario();
  }

  pegaDetallhesUsuario = () => {
    axios
      .get(`${urlBase}/${this.props.idUsuario}`, headers)
      .then((res) => {
        this.setState({ detalhesUsuario: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema. Tente novamente!");
      });
  }

  onClickDeleteUser = (id) => {

      if (window.confirm("Tem certeza de que deseja deletar?")) {
        axios
        .delete(`${urlBase}/${id}`, headers)
        .then((res) => {
          alert("Usuário(a) foi deletado(a) com sucesso!");          
          this.props.irParaListaUsuarios();
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      }
    }

    onClickEditando = () => {
      this.state.editando === false ? this.setState({editando: true}) : this.setState({editando: false})
    } 

    onChangeNomeEditando = (event) => {
      this.setState({inputNomeEditando: event.target.value})
    }

    onChangeEmailEditando = (event) => {
      this.setState({inputEmailEditando: event.target.value})
    }

    onClickEditaUsuario = (id) => {

      const body = {
      name: this.state.inputNomeEditando,
      email: this.state.inputEmailEditando,
    };

      axios
      .put(`${urlBase}/${id}`, body, headers)
      .then((res) => {
        alert("Usuário(a) foi editado(a) com sucesso!"); 
        this.pegaDetallhesUsuario();
        this.setState({editando: false, inputNomeEditando: '', inputEmailEditando: ''})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
      
    }

    render () {


        return (
            <div>
              <BotaoVoltar onClick={() => { this.props.irParaListaUsuarios()}}><i className="fas fa-arrow-left"></i> Voltar</BotaoVoltar>

              
              <ContainerFlex>
                <TituloPagina>
                  <h1>Detalhes do Usuário</h1>
                </TituloPagina>

                <CardDetalhes>

                  <ContainerDetalhes>  

                    <Detalhes>Nome: <span>{this.state.detalhesUsuario.name}</span></Detalhes>
                    <Detalhes>Email: <span>{this.state.detalhesUsuario.email}</span></Detalhes>
                    </ContainerDetalhes>
                    
                    
                    <ContainerBotoes>    
                      {this.state.editando === false ?                
                        <BotaoEditar title="Editar" onClick={() => {this.onClickEditando()}}><i className="far fa-edit"></i></BotaoEditar>                      
                      :
                      ''
                      }
                      <BotaoDeletar title="Deletar" onClick={() => {this.onClickDeleteUser(this.state.detalhesUsuario.id)}}><i className="far fa-trash-alt"></i></BotaoDeletar>
                    </ContainerBotoes>

                  </CardDetalhes>

                  {this.state.editando === true ? 
                  <ContainerEditar>
                    <TituloEditar>
                      <h2><i class="fas fa-user-edit"></i> Editando</h2>
                    </TituloEditar>

                    <InputEditarNome value={this.state.inputNomeEditando} onChange={this.onChangeNomeEditando} placeholder="Nome" />
                    <InputEditarEmail value={this.state.inputEmailEditando} onChange={this.onChangeEmailEditando} placeholder="Email" />
                    <BotaoSalvarEdicao title="Salvar" onClick={() => {this.onClickEditaUsuario(this.state.detalhesUsuario.id)}}><i class="far fa-save"></i></BotaoSalvarEdicao>

                  </ContainerEditar> 
                  : <div></div>}

              </ContainerFlex>
            </div>
        )
    }
}
import React from "react";

import TelaCadastro from './componentes/TelaCadastro';
import TelaListaUsuarios from "./componentes/TelaListaUsuarios";
import TelaDetalhesUsuario from "./componentes/TelaDetalhesUsuario";


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    idUsuario: "",
  };

  mudarTelaAtual = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaListaUsuarios={this.irParaListaUsuarios} />;
      case "lista":
        return (
          <TelaListaUsuarios
            irParaCadastro={this.irParaCadastro}
            irParaDetalhesUsuario={this.irParaDetalhesUsuario}
          />
        );
      case "detalhes":
        return (
          <TelaDetalhesUsuario
            irParaListaUsuarios={this.irParaListaUsuarios}
            idUsuario={this.state.idUsuario}
          />
        );
      default:
        return <div>Erro! Página não encontrada :(</div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaListaUsuarios = () => {
    this.setState({ telaAtual: "lista" });
  };

  irParaDetalhesUsuario = (id) => {
    this.setState({ telaAtual: "detalhes", idUsuario: id });
  };

  render() {
    return <div>{this.mudarTelaAtual()}</div>;
  }
}
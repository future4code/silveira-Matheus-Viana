import React from "react";

import TelaCadastro from './componentes/TelaCadastro';
import TelaListaUsuarios from "./componentes/TelaListaUsuarios";

class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  mudarTelaAtual = (tela) => {
    this.setState({
      telaAtual: tela,
    });
  };

  render() {
    return (
      <div>
        {this.state.telaAtual === "cadastro" ? (
          <TelaCadastro mudarTelaAtual={this.mudarTelaAtual}></TelaCadastro>
        ) : (
          <TelaListaUsuarios
            mudarTelaAtual={this.mudarTelaAtual}
          ></TelaListaUsuarios>
        )}
      </div>
    );
  }
}

export default App;

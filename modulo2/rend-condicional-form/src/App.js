import React from 'react';
import styled from 'styled-components';
import './App.css';

import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const ContainerBotao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
`;

const BotaoProximo = styled.button`
    background-color: rgb(52, 235, 171);
    border: 1px solid #ccc;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 500;
    color: white;
    cursor: pointer;
`;

class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
    
      default:
        break;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1});
  }

  render(){
    return (
      <div>
        
        {this.renderizarEtapa()}

        {this.state.etapa !== 4 ? <ContainerBotao><BotaoProximo onClick={this.irParaProximaEtapa}>Próxima Etapa</BotaoProximo></ContainerBotao> : false}
      
      </div>
    );
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TituloEtapa = styled.p `
    font-weight: 500;
    font-size: 26px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const CaixaDeSelecao = styled.select`
    height: 30px;
    font-size: 16px;
    border: 1px solid #ccc;
`;

class PerguntaOpcoes extends React.Component {
  render(){
    return (
      <Container>
        <TituloEtapa>{this.props.pergunta}</TituloEtapa>
        <CaixaDeSelecao name="ensino" id="ensino">
          <option value="1">{this.props.opcoes[0]}</option>
          <option value="2">{this.props.opcoes[1]}</option>
          <option value="3">{this.props.opcoes[2]}</option>
          <option value="4">{this.props.opcoes[3]}</option>
        </CaixaDeSelecao>
      </Container>
    )
  }
}

export default PerguntaOpcoes;
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

const Texto = styled.input `
    border: 1px solid #ccc;
    height: 30px;
    font-size: 16px;
    padding: 0 10px;
`;

class PerguntaAberta extends React.Component {
  render(){
    return (
      <Container>
        <TituloEtapa>{this.props.pergunta}</TituloEtapa>
        <Texto />
      </Container>
    )
  }
}

export default PerguntaAberta;
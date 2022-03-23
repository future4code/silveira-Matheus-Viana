import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 50px;
`;

const Icone = styled.i `
  font-size: 24px;
  margin-right: 15px;
  width: 20px;
`;


const Titulo = styled.h4 `
  margin-right: 8px;
`;

function CardPequeno(props) {
    return (
        <Container>
          <Icone><i class={props.classIcon}></i></Icone>
          <Titulo>{ props.info }:</Titulo>
          <p>{ props.descricao }</p>
        </Container>
    )
}

export default CardPequeno;
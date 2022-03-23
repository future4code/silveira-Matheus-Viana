import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
  cursor: pointer;
  a{
    text-decoration: none;
    color: black;
  :hover{
    text-decoration: underline;
  }
  }
`;

const Imagem = styled.img `
    width: 30px;
    margin-right: 10px;
`;


function ImagemButton(props) {
    return (
        <Container>
            <Imagem src={ props.imagem }/>
            <a href={props.link} target="_blank"><p>{ props.texto }</p></a>
        </Container>

    )
}

export default ImagemButton;
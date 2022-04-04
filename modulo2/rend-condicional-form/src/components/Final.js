import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TituloPagina = styled.h2 `
    display: block;
    text-transform: uppercase;
    font-size: 32px;
    margin-bottom: 0;
`;

const TituloEtapa = styled.p `
    font-weight: 500;
    font-size: 26px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

function Final() {
  return (

    <Container>      
      <TituloPagina>O Formulário Acabou</TituloPagina>
      <TituloEtapa>Muito obrigado por participar! Entraremos em contato!</TituloEtapa>
    </Container>

  );
}

export default Final;

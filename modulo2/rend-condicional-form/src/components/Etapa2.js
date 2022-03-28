import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta';

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

function Etapa2() {
  return (

    <Container>      
      <TituloPagina>Etapa 2 - Informações do Ensino Superior</TituloPagina>
      <PerguntaAberta pergunta={"5. Qual o seu curso?"}></PerguntaAberta>
      <PerguntaAberta pergunta={"6. Qual a sua unidade de ensino?"}></PerguntaAberta>
    </Container>

  );
}

export default Etapa2;

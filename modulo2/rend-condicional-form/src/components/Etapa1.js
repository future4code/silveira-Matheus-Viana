import React from 'react';
import styled from 'styled-components';

import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

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

function Etapa1() {
  return (

    <Container>      
      <TituloPagina>Etapa 1 - Dados Gerais</TituloPagina>
      <PerguntaAberta pergunta={"1. Qual o seu nome?"}></PerguntaAberta>
      <PerguntaAberta pergunta={"2. Qual a sua idade?"}></PerguntaAberta>
      <PerguntaAberta pergunta={"3. Qual o seu email?"}></PerguntaAberta>
      <PerguntaOpcoes pergunta={"4. Qual a sua escolaridade?"} opcoes={[
              "Ensino médio incompleto",
              "Ensino médio completo",
              "Ensino superior incompleto",
              "Ensino superior completo"
          ]}></PerguntaOpcoes>
    </Container>

  );
}

export default Etapa1;

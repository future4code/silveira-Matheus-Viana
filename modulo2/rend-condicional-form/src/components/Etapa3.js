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


function Etapa3() {
  return (    

    <Container>      
      <TituloPagina>Etapa 3 - Informações Gerais de Ensino</TituloPagina>
      <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}></PerguntaAberta>
      <PerguntaAberta pergunta={"6. Você fez algum curso complementar?"}></PerguntaAberta>
      <PerguntaOpcoes pergunta={"7. Qual a sua escolaridade?"} opcoes={["Curso técnico","Cursos de inglês","Não fiz curso complementar"]}></PerguntaOpcoes>
    </Container>

  );
}

export default Etapa3;

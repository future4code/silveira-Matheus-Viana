import React, { useState } from 'react';
import styled from "styled-components";

import Header from '../components/header/header';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 620px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  background-color: aliceblue;
`;



const TelaMatches = (props) => {

  return(

      <Card>
        <Header mudarTela={props.mudarTela} mostrarBtn={'TelaMatches'} />
        <h2>Olá! Estou na Tela de Matches...</h2>
        
      </Card>
      
    
  )
}

export default TelaMatches;
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CardPerson from '../components/cardPerson/cardPerson';


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



const TelaInicial = (props) => {
  

  return(

      <Card>
        <Header mudarTela={props.mudarTela} mostrarBtn={'TelaInicial'} />
        <CardPerson />
        <Footer/>        
      </Card>      
    
  )
}

export default TelaInicial;
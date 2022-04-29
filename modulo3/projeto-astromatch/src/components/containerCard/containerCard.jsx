import React, { useState } from 'react';
import styled from "styled-components";

import Header from '../components/header/header';
import CardPerson from '../components/cardPerson/cardPerson';

/* const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8d1d1;
`; */

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

const BtnDismiss = styled.button`
  color: crimson;
  :hover{
    background-color: rgba(220,20,60,0.3);
  }
  :active{
    background-color: rgb(220,20,60);
    color:white;
  }
`;

const BtnMatch = styled.button`
  color: #3ead3e;
  :hover{
    background-color: rgba(63,172,62,0.3);
  }
  :active{
    background-color: rgb(63,172,62);
    color:white;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 0;
    margin: 0 30px 10px 30px;
    cursor: pointer;
    background-color: transparent;
  }
  i{
    font-size: 42px;
  }
`;

const ContainerCard = (props) => {

  return(

      <Card>
        <Header />
        <CardPerson />
        <Footer>
          <BtnDismiss><i className="far fa-times-circle"></i></BtnDismiss>
          <BtnMatch><i className="fas fa-heart"></i></BtnMatch>
        </Footer>
      </Card>
      
    
  )
}

export default ContainerCard;
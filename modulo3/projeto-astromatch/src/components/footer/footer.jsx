import React, { useState } from 'react';
import styled from "styled-components";


const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px outset #ccc;
    margin: 0 30px 10px 30px;
    cursor: pointer;
    background-color: transparent;
  }
  i{
    font-size: 42px;
  }
`;

const BtnDismiss = styled.button`
  color: crimson;
  :hover{
    background-color: rgba(220,20,60,0.3);
  }
  :active{
    background-color: rgba(220,20,60,0.3);
    color:white;
    border: 2px inset #ccc;
  }
`;

const BtnMatch = styled.button`
  color: #3ead3e;
  :hover{
    background-color: rgba(63,172,62,0.3);
  }
  :active{
    background-color: rgba(63,172,62,0.3);
    color:white;
    border: 2px inset #ccc;
  }
`;

const Footer = (props) => {

  const giveMatch = () => {
    props.choosePerson(true);
  }

  const discardMatch = () => {
    props.choosePerson(false);
  }

  return(

    <ContainerFooter>
      <BtnDismiss onClick={discardMatch} title="Descartar"><i className="fas fa-times"></i></BtnDismiss>
      <BtnMatch onClick={giveMatch} title="Dar Match"><i className="fas fa-heart"></i></BtnMatch>
    </ContainerFooter>

  )
}

export default Footer;
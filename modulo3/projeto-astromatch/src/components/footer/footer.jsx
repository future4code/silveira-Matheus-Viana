import React, { useState } from 'react';
import styled from "styled-components";


const ContainerFooter = styled.div`
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

const Footer = (props) => {

  const [match, setMatch] = useState(false);

  const giveMatch = () => {
    if(match){
      setMatch(match); 
    }else{
      setMatch(!match);  
    }  
    console.log(match)
  }

  const discardMatch = () => {
    if(match){
      setMatch(!match); 
    }else{
      setMatch(match); 
    }  
    console.log(match)
  }

  return(

    <ContainerFooter>
      <BtnDismiss onClick={discardMatch}><i className="fas fa-times"></i></BtnDismiss>
      <BtnMatch onClick={giveMatch}><i className="fas fa-heart"></i></BtnMatch>
    </ContainerFooter>

  )
}

export default Footer;
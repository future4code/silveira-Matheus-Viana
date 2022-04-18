import React, { useState } from 'react';
import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #fc8585;
  width: 100%;
  min-height: 60px;
  max-height: 60px;
  button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    margin: 0 30px;
    cursor: pointer;
    background-color: transparent;
  }
  div{    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    margin: 0 30px;
  }
  h2{
    color: #44b3b3;
    margin: 0;
    font-size: 26px;
    span{
      color: #a144b3;
    }
  }
`;

const BtnChoosePerson = styled.button`
  color: #44b3b3;
  font-size: 26px;
  :hover{
    background-color: rgba(68,179,179,0.3);
  }
  :active{
    background-color: rgb(68,179,179);
    color:white;
  }
`;

const BtnMatches = styled.button`
  color: #a144b3;
  font-size: 32px;
  :hover{
    background-color: rgba(161,68,179,0.3);
  }
  :active{
    background-color: rgb(161,68,179);
    color:white;
  }
`;

const Header = (props) => {

  return(

    <ContainerHeader>
      {
        props.mostrarBtn === 'TelaInicial' ? <><div></div><h2>astro<span>match</span></h2>         
        <BtnMatches onClick={()=>props.mudarTela('TelaMatches')}><i className="far fa-grin-hearts"></i></BtnMatches></> : <><BtnChoosePerson onClick={()=>props.mudarTela('TelaInicial')}><i className="fas fa-people-arrows"></i></BtnChoosePerson>
      <h2>astro<span>match</span></h2><div></div></>
      }
    </ContainerHeader>

  )
}

export default Header;
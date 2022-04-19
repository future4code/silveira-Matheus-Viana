import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { BASE_URL } from '../../constants/urls';

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
    margin: 0 15px;
    cursor: pointer;
    background-color: transparent;
  }
  /* div{    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    margin: 0 15px;
  } */
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
    transform: scale(1.1);
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
    transform: scale(1.1);
  }
`;

const BtnClear = styled.button`
  color: crimson;
  font-size: 32px;
  :hover{
    background-color: #dc143c2b;
  }
  :active{
    background-color: crimson;
    color:white;
    transform: scale(1.1);
  }
`;


// FUNÇÃO CLEAR
const Header = (props) => {

  
const clearSwipesAndMatches = () => {

    const HEADERS = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.put(`${BASE_URL}/clear`, HEADERS)
      .then((res) =>{
        props.getProfileToChoose();
        alert(
          "Você limpou todos os swipes e matches!"
        );
      }).catch ((error) => {
        console.log(error)
      alert(
        "Não foi possível limpar os swipes e matches. Tente novamente mais tarde!"
      );
    })
  }


  return(

    <ContainerHeader>
      {
        props.mostrarBtn === 'TelaInicial' ? <><BtnClear onClick={clearSwipesAndMatches} title='Limpar Swipes e Matches'><i className="far fa-trash-alt"></i></BtnClear><h2>astro<span>match</span></h2>         
        <BtnMatches onClick={()=>props.mudarTela('TelaMatches')} title="Matches"><i className="far fa-grin-hearts"></i></BtnMatches></> : <><BtnClear onClick={clearSwipesAndMatches} title='Limpar Swipes e Matches'><i className="far fa-trash-alt"></i></BtnClear><h2>astro<span>match</span></h2><BtnChoosePerson onClick={()=>props.mudarTela('TelaInicial')} title="Pessoas"><i className="fas fa-people-arrows"></i></BtnChoosePerson></>
      }
    </ContainerHeader>

  )
}

export default Header;
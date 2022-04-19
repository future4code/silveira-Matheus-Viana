import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
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
  padding-bottom: 20px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
      width: 320px;
      overflow: hidden;
  }
`;


const TelaInicial = (props) => {

  const choosePerson = (choice) => {

    const body = {
      id: props.person.id,
      choice: choice
    };

    const HEADERS = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post(`${BASE_URL}/choose-person`, body , HEADERS)
    .then((res) => {
      props.getProfileToChoose();
    }).catch ((error) => {
      alert(
        "Não foi possível dar Match nesta pessoa. Tente novamente mais tarde!"
      );
    }) 
  }

  return(

      <Card>
        <Header mudarTela={props.mudarTela} mostrarBtn={'TelaInicial'} person={props.person} getProfileToChoose={props.getProfileToChoose}/>
        {
          props.person !== '' ? 
          <>
          <CardPerson person={props.person} getProfileToChoose={props.getProfileToChoose} />
        <Footer choosePerson={choosePerson} getProfileToChoose={props.getProfileToChoose}/> 
          </> : <CardPerson person={props.person} getProfileToChoose={props.getProfileToChoose} />
        }
          
      </Card>      
    
  )
}

export default TelaInicial;
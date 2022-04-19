import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  background-color: #4e4e4e;
`;

const CardNoMatches = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 535px;
  border-radius: 10px;
  color: white;
  text-align: center;
  p{
    font-size: 18px;
    background-color: #44b3b3;
    padding: 10px 25px;
  }
  i{
    font-size: 120px;
    margin-bottom: 20px;
    color: #44b3b3;
  }
`;

const Imagem = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  min-height: 330px;
  max-height: 330px;
  position: relative;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-radius: 0 0 10px 10px;
  width: 100%;
  height: 150px;
  background-color: rgba(0,0,0,0.3);
  color: white;
`;

const NomeIdade = styled.h2`
  margin: 0;
  padding: 8px 0 0 12px;
`;

const Bio = styled.p`
  margin: 0;
  padding: 8px 0 0 12px;
`;


const CardPerson = (props) => {

  

  useEffect(() => {
    props.getProfileToChoose();
  }, [])

  return(
    <Container>
      {
        props.person != '' ? <Card>
        <Imagem src={props.person.photo}/>
        <Info>
          <NomeIdade>{props.person.name}, <span>{props.person.age}</span></NomeIdade>
          <Bio>{props.person.bio}</Bio>
        </Info>
      </Card> : <CardNoMatches><i className="far fa-sad-tear"></i><p>Não há mais pessoas para dar Match. Resete os swipes e matches no botão de lixeira acima e tente a sorte novamente!</p></CardNoMatches>
      }
      
    </Container>
  )
}

export default CardPerson;



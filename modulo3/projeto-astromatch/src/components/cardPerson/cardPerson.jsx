import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { BASE_URL } from '../../constants/urls';

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

  const [person, setPerson] = useState('');
  
  const getProfileToChoose = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/person`);
      setPerson(res.data.profile);
    } catch (error) {
      alert(
        "Não foi possível carregar as informações solicitadas. Tente novamente mais tarde!"
      );
    }
  }

  useEffect(() => {
    getProfileToChoose();
  }, [])

  return(
    <Container>
      <Card>
        <Imagem src={person.photo}/>
        <Info>
          <NomeIdade>{person.name}, <span>{person.age}</span></NomeIdade>
          <Bio>{person.bio}</Bio>
        </Info>
      </Card>
    </Container>
  )
}

export default CardPerson;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { BASE_URL } from '../constants/urls';
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
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 20px;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fc8585;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d66767; 
    border-radius: 10px;
  } 
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
    width: 320px;
    overflow: hidden;
  }
`;

const ContainerList = styled.ul`
  width: 100%;
  padding: 20px;
  margin: 0;
`;

const ContainerPerson = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 20px 0px 20px;
  padding: 10px;
  cursor: pointer;
  :hover{
    background-color: rgba(161,68,179,0.3);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }
`;

const List = styled.li`
  list-style: none;
  margin-left: 15px;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const DoNotHaveAMatchYet = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  i{
    font-size: 120px;
    color: crimson;
  }
  p{
    font-size: 18px;
    background-color: crimson;
    color: white;
    padding: 10px 0;
  }
`;

const TelaMatches = (props) => {


  const [personMatched, setPersonMatched] = useState([]);
  
  const getMatches = () => {
    axios.get(`${BASE_URL}/matches`)
          .then((res) => {
            setPersonMatched(res.data.matches)
          }).catch ((error) => {
            })
  }

  useEffect(() => {
    getMatches();
  }, [personMatched])

  const listPersonIsMatched = personMatched.map((person) =>{
    return (
      <ContainerPerson>
      <Photo src={person.photo}/>
      <List key={person.id}>{person.name}</List>
    </ContainerPerson>
    )
  })

  return(
    <Card>
      <Header mudarTela={props.mudarTela} mostrarBtn={'TelaMatches'} person={props.person} getProfileToChoose={props.getProfileToChoose}/>
      <ContainerList>
        {
        listPersonIsMatched.length !== 0 ? listPersonIsMatched : 
        <DoNotHaveAMatchYet>
          <i className="fas fa-heartbeat"></i>
          <p>Você ainda não tem nenhum match. Mas continue tentando com outros perfis que uma hora a sua vez chega!</p>
        </DoNotHaveAMatchYet>
        }
      </ContainerList>   
    </Card>
    
  )


  
}

export default TelaMatches;
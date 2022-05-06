import React from "react";
import styled from "styled-components";

const CardList = styled.li`  
  width: 100%;
  background-color: white;
  border-radius: 15px;
  list-style: none;
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.35);
`;

const ContainerInfo = styled.div`
  padding: 10px 20px;
`;

const InfoText = styled.p`
color: rgb(1,73,99);
text-align: justify;
span{
  font-weight: 700;
  font-style: italic;
}
`;


const CardViagemList = (props) => {
  return (
    <CardList>
      <ContainerInfo>
        <InfoText><span>Nome da Viagem:</span> {props.name}</InfoText>
        <InfoText><span>Descrição:</span> {props.description}</InfoText>
        <InfoText><span>Planeta:</span> {props.planet}</InfoText>
        <InfoText><span>Duração:</span> {props.durationInDays} dias</InfoText>
        <InfoText><span>Data:</span> {props.date}</InfoText>
      </ContainerInfo>
    </CardList>
  );
};

export default CardViagemList;

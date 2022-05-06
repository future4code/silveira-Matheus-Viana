import React from "react";
import styled from "styled-components";

const CardList = styled.li`  
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  list-style: none;
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.35);
`;

const ContainerInfo = styled.div`
  padding: 0 20px;
`;

const InfoText = styled.p`
color: rgb(1,73,99);
text-align: justify;
span{
  font-weight: 700;
  font-style: italic;
}
`;


const CardCandidateApprovedList = (props) => {
  return (
    <CardList>
      <ContainerInfo>
        <InfoText><span>Nome:</span> {props.name}</InfoText>
        <InfoText><span>Idade:</span> {props.age}</InfoText>
        <InfoText><span>Profissão:</span> {props.profession}</InfoText>
        <InfoText><span>País:</span> {props.country}</InfoText>
        <InfoText><span>Texto de Candidatura:</span> {props.applicationText}</InfoText>
      </ContainerInfo>
    </CardList>
  );
};

export default CardCandidateApprovedList;
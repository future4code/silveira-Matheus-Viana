import React from "react";
import styled from "styled-components";
import ButtonThreeDSmall from "../ButtonThreeDSmall/ButtonThreeDSmall";

const CardList = styled.li`  
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  list-style: none;
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.35);
  padding: 0 0 20px 0;
`;

const ContainerInfo = styled.div`
  padding: 0 20px;
  min-height: 75%;
`;

const InfoText = styled.p`
color: rgb(1,73,99);
text-align: justify;
span{
  font-weight: 700;
  font-style: italic;
}
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerButtonLeft = styled.div`
  margin-right: 10px;
`;

const ContainerButtonRight = styled.div`
  margin-left: 10px;
`;


const CardCandidatePendingList = (props) => {
  return (
    <CardList>
      <ContainerInfo>
        <InfoText><span>Nome:</span> {props.name}</InfoText>
        <InfoText><span>Idade:</span> {props.age}</InfoText>
        <InfoText><span>Profissão:</span> {props.profession}</InfoText>
        <InfoText><span>País:</span> {props.country}</InfoText>
        <InfoText><span>Texto de Candidatura:</span> {props.applicationText}</InfoText>
      </ContainerInfo>
      <ContainerButtons>    
        <ContainerButtonLeft>
          <ButtonThreeDSmall text={<i className="far fa-check-circle"></i>} title="Aprovar" cor="green" onClick={() => props.decideCandidate(props.id, true)} />  
        </ContainerButtonLeft>   
        <ContainerButtonRight>
          <ButtonThreeDSmall text={<i className="far fa-times-circle"></i>} title="Reprovar" cor="red" onClick={() => props.decideCandidate(props.id, false)} />  
        </ContainerButtonRight>          
      </ContainerButtons>
    </CardList>
  );
};

export default CardCandidatePendingList;
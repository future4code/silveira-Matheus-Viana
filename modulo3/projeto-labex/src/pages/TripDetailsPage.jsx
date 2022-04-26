import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goBack } from "../routes/coordinator";

const Container = styled.div`
  padding: 20px;
`;

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    font-size: 32px;
    color: white;
    text-shadow: 2px 2px 2px #000000cf;
  }
`;

const BlankSpace = styled.div`
  width: 20px;
  height: 23px;
  padding: 12px 42px;
`;

const ContainerCardInfoPlaneta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardInfoPlaneta = styled.div`
  padding: 20px;
  width: 400px;
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  border-radius: 15px;  
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.35);
`;

const ContainerSubTitulo = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  border: 1px solid rgba(0,0,0,0.75);
  border-radius: 15px;
  background-color: rgb(119, 180, 201);
  h2{
    font-size: 26px;
    color: white;
    margin-right: 20px;
    text-shadow: 2px 2px 2px #000000cf;
  }
`;

const TripDetailsPage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeD text={<i class="fas fa-long-arrow-alt-left"></i>} onClick={() => goBack(navigate)} />
          <h2>Marte</h2>
          <BlankSpace/>
      </ContainerTitulo>
      <ContainerCardInfoPlaneta>
        <CardInfoPlaneta>
          <p><b>Nome da Viagem:</b> Marcianos</p>
          <p><b>Descrição:</b> Viagem para conhecer os marcianos amigos</p>
          <p><b>Planeta:</b> Marte</p>
          <p><b>Duração:</b> 50 dias</p>
          <p><b>Data:</b> 2022-06-30</p>
        </CardInfoPlaneta>
      </ContainerCardInfoPlaneta>
      <ContainerSubTitulo>
          <h2>Candidatos Pendentes</h2>
      </ContainerSubTitulo>
      <p>Não há candidatos pendentes</p>
      <ContainerSubTitulo>
          <h2>Candidatos Aprovados</h2>
      </ContainerSubTitulo>
      <p>Não há candidatos aprovados</p>
    </Container>
  );
};

export default TripDetailsPage;

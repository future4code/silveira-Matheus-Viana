import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goToListTripsPage, goToLoginPage } from "../routes/coordinator";
import Background from "../assets/bg-spaceship.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-color: rgb(1,73,99);
`;

const ContainerTitle = styled.div`
  margin-bottom: 40px;
  text-shadow: 2px 2px 2px #000000cf;
  h1{
    font-size: 42px;
    color: white;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const ContainerLeft = styled.div`
  margin-right: 10px;
`;

const ContainerRight = styled.div`
  margin-left: 10px;
`;

const HomePage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitle>
        <h1><i class="fas fa-rocket"></i> LabeX</h1>
      </ContainerTitle>
      <ContainerButtons>
        <ContainerLeft>
          <ButtonThreeD text="Viagens" onClick={() => goToListTripsPage(navigate)} />
        </ContainerLeft>
        <ContainerRight>
        <ButtonThreeD text="Admin" onClick={() => goToLoginPage(navigate)}/>
        </ContainerRight>
      </ContainerButtons>
    </Container>
  );
};

export default HomePage;

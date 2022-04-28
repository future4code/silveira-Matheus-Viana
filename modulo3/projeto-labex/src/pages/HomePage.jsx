import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeDBig from "../components/ButtonThreeDBig/ButtonThreeDBig";
import { goToListTripsPage, goToAdminHomePage } from "../routes/coordinator";
import Background from "../assets/bg-planets.jpg";
import logo from "../assets/logo.png";

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

const LogoImage = styled.img`
  width: 300px;
  height: 300px;
`;

const HomePage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitle>
        <LogoImage src={logo} />
      </ContainerTitle>
      <ContainerButtons>
        <ContainerLeft>
          <ButtonThreeDBig text="Viagens" title="Viagens" cor="darkblue" onClick={() => goToListTripsPage(navigate)} />
        </ContainerLeft>
        <ContainerRight>
        <ButtonThreeDBig text="Admin" title="Painel Admin" onClick={() => goToAdminHomePage(navigate)}/>
        </ContainerRight>
      </ContainerButtons>
    </Container>
  );
};

export default HomePage;

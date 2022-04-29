import React from "react";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 2px rgb(1,73,99);
  h1{
    text-align: center;
    font-size: 32px;
    color: rgb(119, 180, 201);
    margin-top: 0;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 767px){
    h1{
      font-size: 18px;
    }
  }
`;

const LogoImage = styled.img`
  width: 300px;
  height: 300px;
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
        <LogoImage src={logo} />
        <h1>Aventuras Intergaláticas</h1>
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

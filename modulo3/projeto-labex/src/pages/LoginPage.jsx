import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goBack, goToAdminHomePage } from "../routes/coordinator";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 1px outset rgba(0,0,0,0.9);
  border-radius: 25px;
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.35);
  padding: 0 30px;
  background-color: white;
`;

const TituloCard = styled.h2`
  font-size: 32px;
  margin-top: 0;
`;

const InputForm = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 15px;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const ContainerLeft = styled.div`
  margin-top: 15px;
  margin-right: 10px;
`;

const ContainerRight = styled.div`
  margin-top: 15px;
  margin-left: 10px;
`;

const LoginPage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerCard>

        <TituloCard><i class="fas fa-user-secret"></i> Login</TituloCard>
        <InputForm placeholder="Email" />
        <InputForm placeholder="Senha" />
        <ContainerButtons>
          <ContainerLeft>
            <ButtonThreeD text={<i class="fas fa-long-arrow-alt-left"></i>} color="red" onClick={() => goBack(navigate)} />
          </ContainerLeft>
          <ContainerRight>
            <ButtonThreeD text={<i class="fas fa-sign-in-alt"></i>} color="green" onClick={() => goToAdminHomePage(navigate)} />
          </ContainerRight>
          
          
        </ContainerButtons>

      </ContainerCard>
    </Container>
  );
};

export default LoginPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goBack, goToApplicationFormPage } from "../routes/coordinator";

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

const ContainerBtnVoltar = styled.div`  
  padding: 12px 42px 12px 0;
  width: 110px;
`;


const LisTripsPage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitulo>
        <ContainerBtnVoltar>
          <ButtonThreeD text={<i class="fas fa-long-arrow-alt-left"></i>} onClick={() => goBack(navigate)} />
        </ContainerBtnVoltar>
          <h2>Lista de Viagens</h2>
          <ButtonThreeD text="Inscrever-se" onClick={() => goToApplicationFormPage(navigate)} />
      </ContainerTitulo>
    </Container>
  );
};

export default LisTripsPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goToHomePage, goBack, goToCreateTripPage } from "../routes/coordinator";

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

const ContainerSubTitulo = styled.div`
  margin-top: 10px;
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


const AdminHomePage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeD text={<i class="fas fa-long-arrow-alt-left"></i>} onClick={() => goToHomePage(navigate)} />
          <h2>Painel Administrativo</h2>
          <ButtonThreeD text={<i class="fas fa-power-off"></i>} onClick={() => goBack(navigate)} />
      </ContainerTitulo>
      <ContainerSubTitulo>
          <h2>Viagens</h2>
          <ButtonThreeD text={<i class="fas fa-plus"></i>} onClick={() => goToCreateTripPage(navigate)} />
      </ContainerSubTitulo>
    </Container>
  );
};

export default AdminHomePage;

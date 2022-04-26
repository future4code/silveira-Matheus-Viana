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

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const BlankSpace = styled.div`
  width: 140px;
  height: 20px;
`;

const InputForm = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 15px;
`;

const SelectForm = styled.select`
  width: 420px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 15px;
`;

const ContainerButton = styled.div`  
  margin-top: 15px;
`;


const CreateTripsPage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeD text={<i class="fas fa-long-arrow-alt-left"></i>} onClick={() => goBack(navigate)} />
          <h2>Criar Nova Viagem</h2>
          <BlankSpace/>
      </ContainerTitulo>
      <ContainerForm>
        <InputForm placeholder="Nome"/>
        <SelectForm>
          <option>Escolha um Planeta</option>
        </SelectForm>
        <InputForm type="date"/>
        <InputForm placeholder="Descrição"/>
        <InputForm placeholder="Duração em dias"/>
        <ContainerButton>
          <ButtonThreeD text={<i class="fas fa-save"></i>} onClick={() => alert("TESTE - Formulário Enviado com Sucesso!")} />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default CreateTripsPage;

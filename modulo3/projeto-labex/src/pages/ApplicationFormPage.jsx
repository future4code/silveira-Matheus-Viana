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
  width: 20px;
  height: 23px;
  padding: 12px 42px;
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

const ApplicationFormPage = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeD text={<i className="fas fa-long-arrow-alt-left"></i>} cor="red" onClick={() => goBack(navigate)} />
          <h2>Inscreva-se para uma viagem</h2>
          <BlankSpace/>
      </ContainerTitulo>
      <ContainerForm>
        <SelectForm>
          <option>Escolha uma Viagem</option>
        </SelectForm>
        <InputForm placeholder="Nome"/>
        <InputForm placeholder="Idade"/>
        <InputForm placeholder="Porque sou um bom candidato(a)?"/>
        <InputForm placeholder="Profissão"/>
        <SelectForm>
          <option>Escolha um País</option>
        </SelectForm>
        <ContainerButton>
          <ButtonThreeD text={<i className="fas fa-save"></i>} cor="green" onClick={() => alert("TESTE - Formulário Enviado com Sucesso!")} />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default ApplicationFormPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import ButtonThreeDSmall from "../components/ButtonThreeDSmall/ButtonThreeDSmall";
import { goBack } from "../routes/coordinator";
import useProtectedPage from '../hooks/useProtectedPage';
import useForm from "../hooks/useForm";

const Container = styled.div`
  padding: 20px;
`;

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    text-align: center;
    font-size: 32px;
    color: white;
    text-shadow: 2px 2px 2px #000000cf;
  }
  @media screen and (max-width: 767px){
    h2{
      font-size: 18px;
    }
  }
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const BlankSpace = styled.div`
  width: 140px;
  height: 20px;
  @media screen and (max-width: 767px){
    width: 0;
    height: 0;
  }
`;

const InputForm = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
  font-family: inherit;
  font-size: inherit;
  margin-bottom: 15px;
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 767px){
    width: 90%;
    height: 40px;
  }
`;

const TextAreaForm = styled.textarea`
  width: 400px;
  height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  font-family: inherit;
  font-size: inherit;
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 767px){
    width: 90%;
    height: 110px;
  }
`;

const SelectForm = styled.select`
  width: 420px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 16px;
  margin-bottom: 15px;
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    width: 93%;
  }
  @media screen and (max-width: 767px){
    width: 98%;
    height: 40px;
  }
`;

const ContainerButton = styled.div`  
  margin-top: 15px;
`;


const CreateTripsPage = (props) => {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, onChangeForm, cleanFields } = useForm({ 
    name: "", 
    planet: "", 
    date: "", 
    description: "", 
    durationInDays: "" 
  });

  /* Função para não dar refresh na página ao clicar no submit */
  const handleSubmit = function(e) {
    e.preventDefault();
  }

  const onSubmitCreateTrip = () => {
              
      const HEADERS = {
        headers: {
          "Content-Type": "application/json",
          "auth": localStorage.getItem("token") 
        }
      }

      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira/trips",
          form, HEADERS
        )
        .then((response) => { 
          alert("Viagem cadastrada com sucesso!");
          navigate("/admin/trips/list/"); 
        })
        .catch((error) => {
          cleanFields();
        });

  }


  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeDSmall text={<i className="fas fa-long-arrow-alt-left"></i>} title="Voltar" cor="red" onClick={() => goBack(navigate)} />
          <h2>Criar Nova Viagem</h2>
          <BlankSpace/>
      </ContainerTitulo>
      <ContainerForm onSubmit={handleSubmit}>
        <InputForm placeholder="Nome" type={"text"} value={form.name} name={"name"} onChange={onChangeForm} pattern={"^.{5,}"} title={"O nome deve ter no mínimo 5 letras."} required/>
        <SelectForm name={"planet"} defaultValue={""} onChange={onChangeForm} required>
          <option value={""} disabled>Escolha um Planeta</option>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Terra"}>Terra</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Júpiter"}>Júpiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Netuno"}>Netuno</option>
          <option value={"Plutão"}>Plutão</option>
        </SelectForm>
        <InputForm type="date" id="inputDate" value={form.date} name={"date"} onChange={onChangeForm} min={new Date().toISOString().slice(0, 10)} required/>
        <TextAreaForm placeholder="Descrição" type={"text"} value={form.description} name={"description"} onChange={onChangeForm} pattern={"^.{30,}"} title={"A descrição deve ter no mínimo 30 letras."} required/>
        <InputForm placeholder="Duração em dias" type={"number"} value={form.durationInDays} name={"durationInDays"} min={50} onChange={onChangeForm} required/>
        <ContainerButton>
          <ButtonThreeDSmall text={<i className="fas fa-save"></i>} cor="green" title="Enviar" onClick={() => onSubmitCreateTrip()} />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default CreateTripsPage;

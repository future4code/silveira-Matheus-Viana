import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goToHomePage, goToLoginPage ,goToCreateTripPage, goToTripDetailsPage } from "../routes/coordinator";
import useProtectedPage from '../hooks/useProtectedPage';
import useRequestData from "../hooks/useRequestData";

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

const ContainerViagens = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CarregandoMessage = styled.h1`
  color: rgb(1,73,99);
  text-shadow: 2px 2px 2px #000000cf;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: white;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3,1fr);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  padding: 20px 0;
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const CardTrip = styled.li`
  background-color: white;
  width: 100%;
  height: 80px;
  box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.75);
  color: black;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border: 1px outset #0066ff84;
  border-radius: 15px;
  :active{
    transform: translateY(-3px);
  border: 1px inset #0066ff84;
  }
`;

const CardTripName = styled.div`
  background-color: white;
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
  border-radius: 15px 0 0 15px;
  text-align: center;
  :hover{    
    background-color: #0066ff84;
    opacity: 0.8;
    color: white;
  }
`;

const DeleteButton = styled.button`
  background-color: rgb(119, 180, 201);
  height: 100%;
  width: 15%;
  border: 0;
  cursor: pointer;
  opacity: 0.5;
  border-radius: 0 15px 15px 0;
  i{
    font-size: 18px;
    color: red;
  }
  :hover{    
    background-color: rgb(1,73,99);
    opacity: 1;
    i{      
      transform: scale(1.2);
      color: white;
    }
  }
  :active{
    opacity: 0.8;
  }
`;

const AdminHomePage = (props) => {
  const navigate = useNavigate();
  
  useProtectedPage();

  const [data, isLoading, error] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira/trips"
  );

  const listaTrips = data && data.trips.map((trip) => {
    return <CardTrip key={trip.id}><CardTripName onClick={() => {
      goToTripDetailsPage(navigate, trip.id);
    }
    }>{trip.name}</CardTripName> <DeleteButton onClick={() => {
      alert('TESTE- Viagem Deletada com Sucesso!')
    }}><i className="far fa-trash-alt"></i></DeleteButton></CardTrip>
  });

  const onClickLogout = () => {
    localStorage.removeItem('token');
    goToLoginPage(navigate);
  }

  return (
    <Container>
      <ContainerTitulo>
          <ButtonThreeD text={<i className="fas fa-long-arrow-alt-left"></i>} title="Voltar" cor="red" onClick={() => goToHomePage(navigate)} />
          <h2>Painel Administrativo</h2>
          <ButtonThreeD text={<i className="fas fa-power-off"></i>} title="Logout" onClick={onClickLogout} />
      </ContainerTitulo>
      <ContainerSubTitulo>
          <h2>Viagens</h2>
          <ButtonThreeD text={<i className="fas fa-plus"></i>} title="Criar Viagem" cor="green" onClick={() => goToCreateTripPage(navigate)} />
      </ContainerSubTitulo>      
      <ContainerViagens>
        {isLoading && <CarregandoMessage>Aguarde! Carregando...</CarregandoMessage>}
        {!isLoading && error && <h1>Verifique a sua conexão com a internet</h1>}
        {!isLoading &&
          listaTrips &&
          (listaTrips.length > 0 ? (            
          <ContainerGrid>{listaTrips}</ContainerGrid>
          ) : (
            "Não há viagens programadas para o período."
          ))}
      </ContainerViagens>
    </Container>
  );
};

export default AdminHomePage;

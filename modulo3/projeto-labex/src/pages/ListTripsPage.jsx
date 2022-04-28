import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeDSmall from "../components/ButtonThreeDSmall/ButtonThreeDSmall";
import { goBack, goToApplicationFormPage } from "../routes/coordinator";
import CardTripList from "../components/CardTripList/CardTripList";
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

const ContainerBtnVoltar = styled.div`  
  padding: 12px 42px 12px 0;
  width: 110px;
`;

const ContainerViagens = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListaViagens = styled.ul`
  padding: 0;
  margin: 15px 0 0 0;
`;

const CarregandoMessage = styled.h1`
  color: rgb(1,73,99);
  text-shadow: 2px 2px 2px #000000cf;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: white;
`;


const LisTripsPage = (props) => {
  const navigate = useNavigate();

  const [data, isLoading, error] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira/trips"
  );
  const listaTrips = data && data.trips.map((trip) => {
      return <CardTripList key={trip.id} name={trip.name} description={trip.description} planet={trip.planet} durationInDays={trip.durationInDays} date={trip.date} />
    });

  return (
    <Container>
      <ContainerTitulo>
        <ContainerBtnVoltar>
          <ButtonThreeDSmall text={<i className="fas fa-long-arrow-alt-left"></i>} title="Voltar" cor="red" onClick={() => goBack(navigate)} />
        </ContainerBtnVoltar>
          <h2>Lista de Viagens</h2>
          <ButtonThreeDSmall text={<i className="fas fa-file-signature"></i>} title="Inscreva-se" cor="green" onClick={() => goToApplicationFormPage(navigate)} />
      </ContainerTitulo>
      <ContainerViagens>
        {isLoading && <CarregandoMessage>Aguarde! Carregando...</CarregandoMessage>}
        {!isLoading && error && <h1>Deu erro! Verifique a sua conexão com a internet</h1>}
        {!isLoading &&
          listaTrips &&
          (listaTrips.length > 0 ? (
            <ListaViagens>{listaTrips}</ListaViagens>
          ) : (
            "Viagens não encontradas"
          ))}
      </ContainerViagens>
      
    </Container>
  );
};

export default LisTripsPage;

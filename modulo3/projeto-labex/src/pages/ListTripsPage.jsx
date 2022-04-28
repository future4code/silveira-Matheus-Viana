import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonThreeDSmall from "../components/ButtonThreeDSmall/ButtonThreeDSmall";
import { goBack, goToApplicationFormPage } from "../routes/coordinator";
import CardTripList from "../components/CardTripList/CardTripList";
import useRequestData from "../hooks/useRequestData";
import Loading from "../components/Loading/Loading";

const Container = styled.div`
  padding: 20px;
`;

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  h2{
    font-size: 32px;
    color: white;
    text-shadow: 2px 2px 2px #000000cf;
  }
  @media screen and (max-width: 768px){
    h2{
      font-size: 18px;
    }
  }
`;

const ContainerBtn = styled.div`  
  padding: 12px 42px 12px 0;
  width: 110px;
  @media screen and (max-width: 768px){
    padding: 0;
  }
`;

const ContainerBtnRight = styled.div`  
  padding: 12px 0 12px 42px;
  width: 110px;
  @media screen and (max-width: 768px){
    padding: 0;
  }
`;

const ContainerViagens = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  padding: 20px 0;
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const ContainerEmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  padding: 0;
  h3{
    color: rgb(1,73,99);
    padding: 10px 20px;
    border-radius: 15px;
    background-color: white;
    text-align: center;    
  }
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
        <ContainerBtn>
          <ButtonThreeDSmall text={<i className="fas fa-long-arrow-alt-left"></i>} title="Voltar" cor="red" onClick={() => goBack(navigate)} />
        </ContainerBtn>
          <h2>Lista de Viagens</h2>
          <ContainerBtnRight>
            <ButtonThreeDSmall text={<i className="fas fa-file-signature"></i>} title="Inscreva-se" cor="green" onClick={() => goToApplicationFormPage(navigate)} />
          </ContainerBtnRight>
      </ContainerTitulo>
      <ContainerViagens>
        {isLoading && <Loading/>}
        {!isLoading && error && <h1>Deu erro! Verifique a sua conexão com a internet</h1>}
        {!isLoading &&
          listaTrips &&
          (listaTrips.length > 0 ? (
            <ContainerGrid>{listaTrips}</ContainerGrid>
          ) : (
            <ContainerEmptyMessage><h3>Não há viagens disponíveis no momento.</h3></ContainerEmptyMessage>
          ))}
      </ContainerViagens>
      
    </Container>
  );
};

export default LisTripsPage;

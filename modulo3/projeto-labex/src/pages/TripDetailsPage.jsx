import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import ButtonThreeDSmall from "../components/ButtonThreeDSmall/ButtonThreeDSmall";
import { goBack } from "../routes/coordinator";
import useProtectedPage from '../hooks/useProtectedPage';
import CardCandidatePendingList from "../components/CardCandidatePendingList/CardCandidatePendingList";
import CardCandidateApprovedList from "../components/CardCandidateApprovedList/CardCandidateApprovedList";
import Loading from "../components/Loading/Loading";

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
  @media screen and (min-device-width : 768px) and (max-device-width : 1200px) {
    h2{
      font-size: 26px;
    }
  }
  @media screen and (max-width: 767px){
    h2{
      font-size: 18px;
    }
  }
`;

const BlankSpace = styled.div`
  width: 20px;
  height: 23px;
  padding: 12px 42px;
  @media screen and (max-width: 767px){
    width: 0;
    height: 0;
    padding: 0;
  }
`;

const ContainerCardInfoPlaneta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px){
    margin-top: 15px;
  }
`;

const CardInfoPlaneta = styled.div`
  padding: 20px;
  width: 400px;
  max-height: 300px;
  overflow-y: auto;
  word-wrap: break-word;
  background-color: white;
  border-radius: 15px;  
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.35);
  @media screen and (max-width: 767px){
    padding: 0 20px;
  }
`;

const ContainerSubTitulo = styled.div`
  margin-top: 30px;
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

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  padding: 20px 0;
  @media screen and (max-width: 767px){
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


const TripDetailsPage = (props) => {
  const navigate = useNavigate();
  const params = useParams();  
  const [tripInfo, setTripInfo] = useState();    
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useProtectedPage();

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira";

  const HEADERS = {
    headers:{
      auth: localStorage.getItem('token')
    }
  };

  useEffect(() => {

    setIsLoading(true);
    axios
      .get(`${url}/trip/${params.id}`, HEADERS)
      .then((res) => {
        setIsLoading(false);
        setTripInfo(res.data.trip);
        setCandidates(res.data.trip.candidates);
      })
      .catch((err) => {
        setIsLoading(false);
      });

  }, [url]);


  const decideCandidate = (candidateId, choice) =>{

      const body = {
          approve: choice
      }

      const HEADERS = {
        headers:{
          "Content-Type": "application/json",
          "auth": localStorage.getItem('token')
        }
      };

      axios
      .put(`${url}/trips/${tripInfo.id}/candidates/${candidateId}/decide`, body, HEADERS)
      .then((res) => {
          if (choice === true) {
              alert("Candidato aprovado!")
          } else {
              alert("O candidato foi reprovado")
          }
          document.location.reload(true);
      })
      .catch((err) => {
      })
  }

  const pendingCandidates = candidates.map((candidate) => {
    return <CardCandidatePendingList key={candidate.id} id={candidate.id} name={candidate.name} age={candidate.age} profession={candidate.profession} country={candidate.country} applicationText={candidate.applicationText} decideCandidate={decideCandidate} />
  });

  const approvedCandidates = tripInfo && tripInfo.approved.map((candidate) => {
        return (
            <CardCandidateApprovedList key={candidate.id} id={candidate.id} name={candidate.name} age={candidate.age} profession={candidate.profession} country={candidate.country} applicationText={candidate.applicationText} />
        )
    })


  return (
    <Container>
      {isLoading && <Loading/>}
      {!isLoading &&
        tripInfo &&
        (tripInfo !== undefined ? (            
          <>            
            <ContainerTitulo>
                <ButtonThreeDSmall text={<i className="fas fa-long-arrow-alt-left"></i>} title="Voltar" cor="red" onClick={() => goBack(navigate)} />
                <h2>{tripInfo && tripInfo.name}</h2>
                <BlankSpace/>
            </ContainerTitulo>
            <ContainerCardInfoPlaneta>
              <CardInfoPlaneta>
                <p><b>Descrição:</b> {tripInfo && tripInfo.description}</p>
                <p><b>Planeta:</b> {tripInfo && tripInfo.planet}</p>
                <p><b>Duração:</b> {tripInfo && tripInfo.durationInDays} dias</p>
                <p><b>Data:</b> {tripInfo && tripInfo.date}</p>
              </CardInfoPlaneta>
            </ContainerCardInfoPlaneta>
            <ContainerSubTitulo>
                <h2><i className="fas fa-history"></i> Candidatos Pendentes</h2>
            </ContainerSubTitulo>
            <ContainerGrid>
              {pendingCandidates && pendingCandidates.length > 0 ? pendingCandidates : <ContainerEmptyMessage><h3>Não há candidatos pendentes</h3></ContainerEmptyMessage>} 
            </ContainerGrid>
            <ContainerSubTitulo>
                <h2><i className="far fa-check-circle"></i> Candidatos Aprovados</h2>
            </ContainerSubTitulo>
            <ContainerGrid>
              {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <ContainerEmptyMessage><h3>Não há candidatos aprovados</h3></ContainerEmptyMessage>}
            </ContainerGrid>
          </>
        ) : (
          "Não há viagens programadas para o período."
        ))}
    </Container>
  );
};

export default TripDetailsPage;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ButtonThreeD from "../components/ButtonThreeD/ButtonThreeD";
import { goToHomePage } from "../routes/coordinator";


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

const FormularioLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerTituloCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TituloCard = styled.h2`
  height: 40px;
  font-size: 32px;
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

const ContainerButtonSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const BlankSpace = styled.div`
  width: 20px;
  height: 23px;
  padding: 12px 42px;
`;

const LoginPage = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onSubmitLogin = () => {
    const HEADERS = {
      headers: {
        "Content-Type": "application/json" 
      }
    }

    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-mantini-silveira/login",
        body, HEADERS
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  /* Função para não dar refresh na página ao clicar no submit */
  const handleSubmit = function(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <ContainerCard>

        <ContainerTituloCard>
          <ButtonThreeD text={<i className="fas fa-long-arrow-alt-left"></i>} title="Voltar" cor="red" onClick={() => goToHomePage(navigate)} />
          <TituloCard>
            <i className="fas fa-user-secret"></i> Login
          </TituloCard>
          <BlankSpace/>
        </ContainerTituloCard>
        
        <FormularioLogin onSubmit={handleSubmit}>
          <InputForm 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
          <InputForm 
            placeholder="Senha" 
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <ContainerButtonSubmit>
              <ButtonThreeD text={<i className="fas fa-sign-in-alt"></i>} title="Enviar" cor="green" onClick={() => onSubmitLogin()} />            
          </ContainerButtonSubmit>
        </FormularioLogin>

      </ContainerCard>
    </Container>
  );
};

export default LoginPage;

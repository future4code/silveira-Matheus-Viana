import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import './styled'
import { Title, TextInfo, StyledFormControlLabel, StyledButton } from './styled';
import { TextField, Checkbox, Button } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import { SignUpFormContainer, InputsContainer, TextInfoLink } from '../SignUpPage/styled';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { signup } from '../../services/users';
import GlobalStateContext from '../../context/GlobalStateContext';
import CircularProgress from '@material-ui/core/CircularProgress';


const SignUpPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { setters } = useContext(GlobalStateContext);

  const { setRightButtonText } = setters;

  const { form, onChangeForm, cleanFields } = useForm({ username: "", email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signup(form, cleanFields, navigate, setRightButtonText, setIsLoading);
  }

  return (
    <>      
      <Header />
      <Title>Olá, boas vindas ao LabEddit 😉</Title>
      <SignUpFormContainer>

        <form onSubmit={onSubmitForm}>
            <InputsContainer>

              <TextField
                name="username"
                value={form.username} 
                onChange={onChangeForm}
                label="Nome de usuário"
                variant="outlined"
                fullWidth
                margin='dense'
                required
              />
              <TextField
                type="email"
                name="email"
                value={form.email} 
                onChange={onChangeForm}
                label="E-mail"
                variant="outlined"
                fullWidth
                margin='dense'
                required
              />
              <TextField
                type="password"
                name="password"
                value={form.password} 
                onChange={onChangeForm}
                inputProps={{ 
                  pattern: "^.{8,30}$", 
                  title: "Sua senha deve possuir no mínimo 8 e no máximo 30 caracteres"
                }}
                label="Senha"
                variant="outlined"
                fullWidth
                margin='dense'
                required
              />
              
              <TextInfo>Ao continuar, você concorda com o nosso <TextInfoLink href=''>Contrato de usuário</TextInfoLink> e nossa <TextInfoLink href=''>Política de Privacidade</TextInfoLink></TextInfo>
              <StyledFormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Eu concordo em receber emails sobre coisas legais no Labeddit"
              />
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ borderRadius: 50 }}
              > 
                {isLoading ? <CircularProgress color='inherit' size={24}/> : <>Cadastrar</>} 
              </StyledButton>
            
            </InputsContainer>
        </form>

      </SignUpFormContainer>
    </>
  );
}

export default SignUpPage;

import React from 'react';
import { useNavigate } from "react-router-dom";
import './styled';
import logo from '../../assets/logo.png';
import { ScreenContainer, LogoImage, SignUpButtonContainer, Title, Subtitle, ContainerFlex, Line, LoginFormContainer } from './styled';
import LoginForm from './LoginForm';
import Button from '@material-ui/core/Button';
import { goToSignUp } from '../../routes/coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';


const LoginPage = (props) => {
  const navigate = useNavigate();
  useUnprotectedPage(); 

  return (
    <ScreenContainer>
      <ContainerFlex>
        <LogoImage src={logo} />
        <Title>LabEddit</Title>
        <Subtitle>O projeto de rede social da Labenu</Subtitle>
      </ContainerFlex>

      <LoginFormContainer>
        <LoginForm />
      </LoginFormContainer>

      <Line />

      <SignUpButtonContainer>

          <Button
            onClick={() => goToSignUp(navigate)}
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            style={{ borderRadius: 50 }}
          > 
            Crie uma conta!
          </Button>

      </SignUpButtonContainer>

    </ScreenContainer>
  );
}

export default LoginPage;
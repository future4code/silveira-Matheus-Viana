import React from 'react';
import './styled';
import logo from '../../assets/logo.png';
import { ContainerFlex, Imagem, Title, Subtitle, Formulario, StyledTextField, ContainerButtons, ContainerInputs, Line, StyledButton } from './styled';
import useForm from '../../hooks/useForm';


const LoginPage = () => {

  const [form, onChange, clear] = useForm({email: "", password: ""});

  const onSubmitForm = () => {
    alert('Formulário enviado com sucesso!')
  }

  return (
    <div>
      <ContainerFlex>
        <Imagem src={logo} />
        <Title>LabEddit</Title>
        <Subtitle>O projeto de rede social da Labenu</Subtitle>
      </ContainerFlex>
      <Formulario noValidate autoComplete="off" onSubmit={onSubmitForm}>
        <ContainerInputs>
          <StyledTextField id="outlined-basic" label="Email" name={"email"} value={form.email} onChange={onChange} variant="outlined" required/>
          <StyledTextField id="outlined-basic" label="Senha" name={"password"} value={form.password} onChange={onChange} variant="outlined" type="password" required/>
        </ContainerInputs>
        <ContainerButtons>
          <StyledButton variant="contained" color="primary" type='submit'>Continuar</StyledButton>
          <Line />
          <StyledButton variant="outlined" color="secondary">Crie uma conta!</StyledButton>
        </ContainerButtons>
      </Formulario>
    </div>
  );
}

export default LoginPage;

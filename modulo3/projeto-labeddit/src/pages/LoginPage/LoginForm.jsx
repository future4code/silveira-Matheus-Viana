import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './styled';
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputsContainer, LoginFormContainer, StyledButton } from './styled';
import { login } from '../../services/users';
import GlobalStateContext from '../../context/GlobalStateContext';
import CircularProgress from '@material-ui/core/CircularProgress';


const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { setters } = useContext(GlobalStateContext);

  const { setRightButtonText } = setters;

  const { form, onChangeForm, cleanFields } = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, cleanFields, navigate, setRightButtonText, setIsLoading);
  }  

  return(

      <LoginFormContainer>
        <form onSubmit={onSubmitForm}>
          <InputsContainer>
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
                label="Senha"
                variant="outlined"
                fullWidth
                margin='dense'
                required
              />
          </InputsContainer>

          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: 50 }}
          > 
            {isLoading ? <CircularProgress color='inherit' size={24}/> : <>Continuar</>} 
          </StyledButton>
        </form>
      </LoginFormContainer>

  )
}

export default LoginForm;

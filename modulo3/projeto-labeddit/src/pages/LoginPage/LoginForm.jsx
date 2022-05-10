import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './styled';
import useForm from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputsContainer, LoginFormContainer } from './styled';
import { login } from '../../services/users';
import GlobalStateContext from '../../context/GlobalStateContext';


const LoginForm = () => {
  const navigate = useNavigate();

  const { states, setters } = useContext(GlobalStateContext);

  const { rightButtonText } = states;
  const { setRightButtonText } = setters;

  const { form, onChangeForm, cleanFields } = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, cleanFields, navigate, setRightButtonText);
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: 50 }}
          > 
            Continuar 
          </Button>
        </form>
      </LoginFormContainer>

  )
}

export default LoginForm;

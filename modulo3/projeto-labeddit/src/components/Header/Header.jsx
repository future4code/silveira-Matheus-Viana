import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar, StyledButton, WhiteSpace, Logo, LinkFeed } from './styled';
import logo from '../../assets/logo.png'
import { goToLogin } from '../../routes/coordinator';
import GlobalStateContext from '../../context/GlobalStateContext';


const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { states, setters } = useContext(GlobalStateContext);

  const { rightButtonText } = states;
  const { setRightButtonText } = setters;

  const logout = () => {
    localStorage.removeItem('token');
  }

  const rightButtonAction = () => {
    if(token){
      logout();
      setRightButtonText('Entrar');
      goToLogin(navigate);
    }else{
      goToLogin(navigate);
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <WhiteSpace/>
          <LinkFeed href="/feed">
            <Logo src={logo}/>
          </LinkFeed>
          <StyledButton color="inherit" onClick={rightButtonAction}>{rightButtonText}</StyledButton>
          
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;
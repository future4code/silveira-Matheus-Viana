import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar, StyledButton, WhiteSpace, Logo } from './styled';
import logo from '../../assets/logo.png'


const Header = (props) => {
  return (
      <AppBar position="static">
        <StyledToolbar>
          <WhiteSpace/>
          <Logo src={logo}/>
          {props.btnAction === 'entrar' ? <StyledButton color="inherit">Entrar</StyledButton> : <StyledButton color="inherit">Logout</StyledButton>}
          
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;
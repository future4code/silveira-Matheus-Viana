import styled from "styled-components";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { neutralColor, primaryText } from '../../constants/colors';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: ${neutralColor};
`;

export const StyledButton = styled(Button)`
  color: ${primaryText} !important;
  font-size: 18px;
  width: 90px;
  text-transform: capitalize !important;
`;

export const WhiteSpace = styled.div`
  width: 90px;
  height: 20px;
  background-color: ${neutralColor} !important;
`

export const LinkFeed = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 30px;
`

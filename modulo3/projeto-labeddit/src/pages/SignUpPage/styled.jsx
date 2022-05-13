import styled from 'styled-components';
import { FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const Title = styled.h2`
  font-size: 32px;
  margin: 4vh;
  text-align: center;
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const InputsContainer = styled.div`
  width: 80vw;
  margin-top: 20vh;
`;

export const TextInfo = styled.p`
  text-align: justify;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8vh;
`;

export const TextInfoLink = styled.a`
  text-decoration: none;
  color: #1663d8;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  font-size: 12px;
  margin-bottom: 3vh;
`;

export const StyledButton = styled(Button)`
  background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  text-transform: capitalize !important;
`;

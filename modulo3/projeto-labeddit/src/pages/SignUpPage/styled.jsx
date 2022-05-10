import styled from 'styled-components';
import { FormControlLabel } from '@material-ui/core';

export const Title = styled.h2`
  font-size: 32px;
  margin: 4vh;
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
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

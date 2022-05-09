import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`

export const Imagem = styled.img`
  width: 80px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 5px 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const StyledTextField = styled(TextField)`
  height: 60px;
  width: 90%;
  border-radius: 4px;
`;

export const StyledButton = styled(Button)`
  width: 90%;
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  margin: 15px 0;
`;


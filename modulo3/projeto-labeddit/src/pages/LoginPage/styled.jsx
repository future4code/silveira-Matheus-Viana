import styled from "styled-components";

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40vh;
`

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 80px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 5px 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const InputsContainer = styled.div`
  margin-bottom: 4vh;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
`;


export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`;

export const Line = styled.div`
  width: 80%;
  height: 1px;
  background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  margin: 3vh;
`;
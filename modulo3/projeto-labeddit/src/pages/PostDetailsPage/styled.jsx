import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
  width: 100%;
`;

export const Line = styled.div`
  width: 90vw;
  height: 1px;
  background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  margin: 3vh 0;
`;

export const ContainerForm = styled.div`
  width: 90vw;
`;

export const ContainerButton = styled.div`
  margin-top: 15px;
`;
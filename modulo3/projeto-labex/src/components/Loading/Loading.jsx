import React from 'react';
import styled, { keyframes } from 'styled-components';

const sideToSideSlide = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const LoadingSlider = styled.div`
  border: 1.6rem solid rgb(119, 180, 201);
  border-radius: 50%;
  border-top: 1.6rem solid rgb(1, 73, 99);
  width: 6rem;
  height: 6rem;
  animation: ${sideToSideSlide} 1.5s linear infinite;
`;

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
`;

const Loading = () => {
  return (
    <ContainerLoading>
      <LoadingSlider />
    </ContainerLoading>
  );
}

export default Loading;

import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div`
  background-color: #0066ff;
  width: 100%;
  height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); 
  grid-row: 3/4;

  @media screen and (max-width: 768px){
    font-size: 12px;
  }

`;


export default class Footer extends React.Component {
  render() {

    return (
      <ContainerFooter>
        <p></p>
        <p>&copy; Copyright 2022 | Desenvolvido por Matheus Mantini </p>
      </ContainerFooter>
    );
  }
}

import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  background-color: blue;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: white;
  padding: 0 30px;
`;

const ContainerButtons = styled.div`
  background-color: red;
  margin-right: 30px;
`;

export default class Header extends React.Component {
  render() {

    return (
      <ContainerHeader>
        <div>
          <Logo>Labefy</Logo>
        </div>
        <ContainerButtons>
          <button><i class="fas fa-home"></i></button>
          <button><i class="fas fa-plus-circle"></i></button>
          <button><i class="fas fa-music"></i></button>
        </ContainerButtons>
      </ContainerHeader>
    );
  }
}

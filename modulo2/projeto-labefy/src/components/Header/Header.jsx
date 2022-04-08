import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div`
  background-color: #0066ff;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);  
  grid-row: 1/2;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 30px;
  letter-spacing: 10px;
  h2{
    font-size: 22px;
    margin-left: 3px;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.75);
  }
  i{
    font-size: 22px;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.75);
  }
  img{
    width: 20px;
    height: 20px;

  }
`;

export default class Header extends React.Component {
  render() {

    return (
      <ContainerHeader>
        <Logo><i className="fas fa-headphones"></i> <h2>Labefy</h2></Logo>
      </ContainerHeader>
    );
  }
}

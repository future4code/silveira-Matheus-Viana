import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  width: 80%;
  min-height: 150px;
  padding: 4%;
  color: black;
  margin-bottom: 4%;
  border-radius: 12px !important;
  border: 1px solid #ddd !important;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInteract = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: black;
`;

export const ContainerVotes = styled.div`
  width: 25vw;
  height: 4vh;
  padding: 0 5px;
  border-radius: 12px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 15vw;
  }
  
  @media screen and (min-width: 1024px) {
    width: 10vw;
  }
`;

export const UserName = styled.p`
  font-size: 12px;
  color: black;
`;

export const Content = styled.p`
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: black;
  word-break: break-all;
  margin: 10px 0;
`;

export const ArrowUp = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ArrowUpActive = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: green;
`;

export const ArrowDown = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ArrowDownActive = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: red;
`;
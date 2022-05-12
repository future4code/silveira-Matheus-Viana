import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  width: 80%;
  min-height: 150px;
  padding: 4%;
  color: black;
  margin-bottom: 4%;
  border-radius: 8px;
  border: 1px solid #ddd;
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
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerComments = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
  width: 15vw;
  height: 4vh;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const ContainreOnclick = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const UserName = styled.p`
  font-size: 12px;
  color: black;
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

export const Title = styled.h2`
  width: 100%;
  font-size: 18px;
  text-align: center;
  color: black;
  word-break: break-all;
  margin: 10px 0;
`;

export const Content = styled.p`
  font-size: 16px;
  color: black;
`;
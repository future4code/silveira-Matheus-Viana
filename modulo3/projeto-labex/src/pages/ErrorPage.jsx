import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: rgb(1,73,99);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 350px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  h2{
    text-align: center;
  }
  i{
    font-size: 150px;
  }
  @media screen and (max-width: 767px){
    height: 45%;
    width: 90%;
  i{
    font-size: 100px;
  }
  }
`;

const ErrorPage = (props) => {
  return (
    <Container>
      <Card>
        <i className="fas fa-exclamation-triangle"></i>
        <h2>Página não encontrada!</h2>
      </Card>
    </Container>
  );
};

export default ErrorPage;

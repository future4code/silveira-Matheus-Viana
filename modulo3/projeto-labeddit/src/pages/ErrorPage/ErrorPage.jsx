import React from 'react';
import './styled';
import { ErrorImage, ErrorPageContainer } from './styled';
import error from '../../assets/error.png'
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header/Header';

const ErrorPage = () => {
  return (
      <>
        <Header />
        <ErrorPageContainer>
          <ErrorImage src={error} />
          <Typography color='primary' variant="h4" align="center">Error 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
      </>
  );
}

export default ErrorPage;

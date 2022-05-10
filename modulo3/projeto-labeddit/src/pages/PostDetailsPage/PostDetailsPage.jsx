import React from 'react';
import Header from '../../components/Header/Header';
import './styled';
import useProtectedPage from '../../hooks/useProtectedPage';

const PostDetailsPage = () => {

  useProtectedPage();
  
  return (
    <div>
      <Header />
      <h2>PostDetailsPage</h2>
    </div>
  );
}

export default PostDetailsPage;

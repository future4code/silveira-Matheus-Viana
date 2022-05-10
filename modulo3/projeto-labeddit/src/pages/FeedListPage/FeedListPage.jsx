import React from 'react';
import Header from '../../components/Header/Header';
import './styled'
import useProtectedPage from '../../hooks/useProtectedPage';
import { Container, Line } from './styled';
import CardPost from '../../components/CardPost/CardPost';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/ulrs';
import CreatePostForm from './CreatePostForm';

const FeedListPage = () => {
  useProtectedPage();

  const posts = useRequestData(`${BASE_URL}/posts`);

  const postsList = posts[0] && posts[0].map((post) =>{
    return (
      <CardPost 
          key={post.id}
          title={post.title}
          user={post.username}
          onClick={()=>null}
        />
    )
  })

  return (
    <div>
      <Header />
      <Container>
      <CreatePostForm />
      <Line />
        {postsList}
      </Container>
    </div>
  );
}

export default FeedListPage;

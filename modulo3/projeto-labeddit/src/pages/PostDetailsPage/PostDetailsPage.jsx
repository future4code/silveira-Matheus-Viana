import React from 'react';
import Header from '../../components/Header/Header';
import './styled';
import useProtectedPage from '../../hooks/useProtectedPage';
import CreateCommentForm from '../PostDetailsPage/CreateCommentForm';
import { Container, Line } from './styled';
import CardPost from '../../components/CardPost/CardPost';
import CardComment from '../../components/CardComment/CardComment';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/ulrs';
import Loading from '../../components/Loading/Loading';


const PostDetailsPage = (props) => {
  useProtectedPage();
  const params = useParams();
  
  const posts = useRequestData(`${BASE_URL}/posts`)[0];

  const postDetails = posts && posts.filter((post => post.id === params.id))[0];


  const comments = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })[0];
  

  const commentsList = comments && comments.map((comment) =>{
    return (
      <CardComment 
          key={comment.id}
          body={comment.body}
          user={comment.username}
          voteSum={comment.voteSum}
        />
    )
  })

  return (
    <div>
      <Header />      
      {comments ? 

        <Container>
          {
            postDetails &&
          <CardPost
              title={postDetails.title}
              body={postDetails.body}
              user={postDetails.username}
              commentCount={postDetails.commentCount}
              voteSum={postDetails.voteSum}
          />
          }
        <CreateCommentForm />
        <Line />      
        {commentsList}
        </Container>
      
      : <Loading/>}
      
    </div>
  );
}

export default PostDetailsPage;

import React, { useEffect, useContext } from 'react';
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
import GlobalStateContext from '../../context/GlobalStateContext';
import Loading from '../../components/Loading/Loading';


const PostDetailsPage = (props) => {
  useProtectedPage();
  const params = useParams();
  const comments = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })[0];
  
  const { states } = useContext(GlobalStateContext);
  const { postTitle, postBody, postUser, postCommentCount, postVoteSum } = states;

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
      <Container>
      <CardPost
          title={postTitle}
          body={postBody}
          user={postUser}
          commentCount={postCommentCount}
          voteSum={postVoteSum}
      />
      <CreateCommentForm />
      <Line />      
      {comments ? commentsList : <Loading/>}
      </Container>
    </div>
  );
}

export default PostDetailsPage;

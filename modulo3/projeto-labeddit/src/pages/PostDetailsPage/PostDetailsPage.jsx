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
import axios from 'axios';


const PostDetailsPage = (props) => {
  useProtectedPage();
  const params = useParams();
  
  const [posts, getData] = useRequestData(`${BASE_URL}/posts`);


  const postDetails = posts && posts.filter((post => post.id === params.id))[0];

  
    const createPostVote = (postId, direction) => {
    const HEADERS = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    const BODY = {
        direction: direction
    }
    if(direction === 1){
      axios
      .post(`${BASE_URL}/posts/${postId}/votes`, BODY, HEADERS)
      .then((res) => {
          getData();
      })
      .catch((err) => {
      })
    }else if(direction === -1){
      axios
      .put(`${BASE_URL}/posts/${postId}/votes`, BODY, HEADERS)
      .then((res) => {
          getData();
      })
      .catch((err) => {
      })
    }else{
      axios
      .delete(`${BASE_URL}/posts/${postId}/votes`, HEADERS)
      .then((res) => {
          getData();
      })
      .catch((err) => {
      })
    }

    }

  
    const createCommentVote = (postId, direction) => {
    const HEADERS = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    const BODY = {
        direction: direction
    }
    if(direction === 1){
      axios
      .post(`${BASE_URL}/comments/${postId}/votes`, BODY, HEADERS)
      .then((res) => {
          getData();
      })
      .catch((err) => {
      })
    }else if(direction === -1){
      axios
      .put(`${BASE_URL}/comments/${postId}/votes`, BODY, HEADERS)
      .then((res) => {
          getData();
      })
      .catch((err) => {
      })
    }else{
      axios
      .delete(`${BASE_URL}/comments/${postId}/votes`, HEADERS)
      .then((res) => {
          getData();
      })
      .catch((err) => {
      })
    }

    }

  const comments = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })[0];
  

  const commentsList = comments && comments.map((comment) =>{
    return (
      <CardComment 
          key={comment.id}
          id={comment.id}
          body={comment.body}
          user={comment.username}
          voteSum={comment.voteSum}
          onClickVote={createCommentVote}
          userVote={comment.userVote}
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
              id={postDetails.id}
              title={postDetails.title}
              body={postDetails.body}
              user={postDetails.username}
              commentCount={postDetails.commentCount}
              voteSum={postDetails.voteSum}
              onClickVote={createPostVote}
              userVote={postDetails.userVote}
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

import React from 'react';
import Header from '../../components/Header/Header';
import './styled'
import useProtectedPage from '../../hooks/useProtectedPage';
import { Container, Line } from './styled';
import CardPost from '../../components/CardPost/CardPost';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/ulrs';
import CreatePostForm from './CreatePostForm';
import { goToPostDetails } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';


const FeedListPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  
  const [posts, getData] = useRequestData(`${BASE_URL}/posts`);

  const onClickCard = (id) => {
    goToPostDetails(navigate, id);
  }

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
    
  
  const postsList = posts && posts.map((post) =>{
    return (
      <CardPost 
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          user={post.username}
          commentCount={post.commentCount}
          voteSum={post.voteSum}
          onClickDetail={()=>onClickCard(post.id, post.title, post.body, post.username, post.commentCount, post.voteSum)}
          onClickVote={createPostVote}
          userVote={post.userVote}
        />
    )
  });
  return (
    <div>
      <Header />
      <Container>
      <CreatePostForm />
      <Line />        
        {posts ? postsList : <Loading/>}
      </Container>
    </div>
  );
}

export default FeedListPage;

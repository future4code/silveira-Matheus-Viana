import React, { useContext } from 'react';
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
import GlobalStateContext from '../../context/GlobalStateContext';
import Loading from '../../components/Loading/Loading';


const FeedListPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  
  const { setters } = useContext(GlobalStateContext);
  const { setPostTitle, setPostBody, setPostUser, setPostCommentCount, setPostVoteSum } = setters;

  const posts = useRequestData(`${BASE_URL}/posts`)[0];

  const onClickCard = (id, postTitle, postBody, postUser, postCommentCount, postVoteSum) => {
    setPostTitle(postTitle);
    setPostBody(postBody);
    setPostUser(postUser);
    setPostCommentCount(postCommentCount);
    setPostVoteSum(postVoteSum);
    goToPostDetails(navigate, id);
  }

  const postsList = posts && posts.map((post) =>{
    return (
      <CardPost 
          key={post.id}
          title={post.title}
          body={post.body}
          user={post.username}
          commentCount={post.commentCount}
          voteSum={post.voteSum}
          onClick={()=>onClickCard(post.id, post.title, post.body, post.username, post.commentCount, post.voteSum)}
        />
    )
  })
  
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

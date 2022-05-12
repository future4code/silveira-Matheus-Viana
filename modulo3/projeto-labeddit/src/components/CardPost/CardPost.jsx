import './styled';
import { ContainreOnclick, ContainerComments, ContainerInteract, ContainerVotes, Content, StyledCard, Title, UserName, ArrowUp, ArrowUpActive, ArrowDown, ArrowDownActive } from './styled';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const CardPost = (props) => {

  const handleLike = () => {
    if(props.userVote === 1){
      props.onClickVote(props.id);
    }else{
      props.onClickVote(props.id, 1)
    }
  }

  const handleDislike = () => {
    if(props.userVote === -1){
      props.onClickVote(props.id);
    }else{
      props.onClickVote(props.id, -1)
    }
  }

  return (    
      <StyledCard>
        <ContainreOnclick onClick={props.onClickDetail}>
          <UserName>Enviado por: {props.user}</UserName>
          <Title>{props.title}</Title>
          <Content>{props.body}</Content>
        </ContainreOnclick>
        <ContainerInteract>
          <ContainerVotes>
            {
              props.userVote === 1 ? 
              <ArrowUpActive onClick={handleLike}>
                <ThumbUpIcon />
              </ArrowUpActive> : 
              <ArrowUp onClick={handleLike}>
                <ThumbUpIcon />
              </ArrowUp>
            }
            <label>{props.voteSum}</label>
            {
              props.userVote === -1 ? 
              <ArrowDownActive onClick={handleDislike}>
                <ThumbDownIcon />
              </ArrowDownActive> : 
              <ArrowDown onClick={handleDislike}>
                <ThumbDownIcon />
              </ArrowDown>
            }
          </ContainerVotes>
          <ContainerComments>
            <ChatBubbleOutlineIcon />
            <label>{props.commentCount}</label>
          </ContainerComments>  
        </ContainerInteract>          
      </StyledCard>
  );
}

export default CardPost;
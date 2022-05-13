import './styled';
import { ContainerInteract, ContainerVotes, StyledCard, Content, UserName, ArrowUpActive, ArrowUp, ArrowDownActive, ArrowDown } from './styled';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const CardComment = (props) => {

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
        <UserName>Enviado por: {props.user}</UserName>
        <Content>{props.body}</Content>
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
        </ContainerInteract>          
      </StyledCard>
  );
}

export default CardComment;
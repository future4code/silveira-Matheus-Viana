import './styled';
import { ContainreOnclick, ContainerComments, ContainerInteract, ContainerVotes, Content, StyledCard, Title, UserName, ArrowUp, ArrowUpActive, ArrowDown, ArrowDownActive } from './styled';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import arrowUp from '../../assets/arrow-up.png';
import arrowUpActive from '../../assets/arrow-up-colored.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowDownActive from '../../assets/arrow-down-colored.png';

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
              <ArrowUpActive onClick={handleLike} src={arrowUpActive} /> : 
              <ArrowUp onClick={handleLike} src={arrowUp} />
            }
            <label>{props.voteSum}</label>
            {
              props.userVote === -1 ? 
              <ArrowDownActive onClick={handleDislike} src={arrowDownActive} /> : 
              <ArrowDown onClick={handleDislike} src={arrowDown} />
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
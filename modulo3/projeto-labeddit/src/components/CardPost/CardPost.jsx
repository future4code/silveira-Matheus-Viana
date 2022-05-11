import './styled';
import { ContainerComments, ContainerInteract, ContainerVotes, Content, StyledCard, Title, UserName } from './styled';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const CardPost = (props) => {

  return (    
      <StyledCard onClick={props.onClick}>
        <UserName>Enviado por: {props.user}</UserName>
        <Title>{props.title}</Title>
        <Content>{props.body}</Content>
        <ContainerInteract>
          <ContainerVotes>
            <ArrowUpwardIcon />
            <label>{props.voteSum}</label>
            <ArrowDownwardIcon />
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
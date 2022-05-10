import './styled';
import { ContainerComments, ContainerInteract, ContainerVotes, StyledCard, Title, UserName } from './styled';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const CardPost = (props) => {

  return (    
      <StyledCard onClick={props.onClick}>
        <UserName>Enviado por: {props.user}</UserName>
        <Title>{props.title}</Title>
        <ContainerInteract>
          <ContainerVotes>
            <ArrowUpwardIcon />
            <label>0</label>
            <ArrowDownwardIcon />
          </ContainerVotes>
          <ContainerComments>
            <ChatBubbleOutlineIcon />
            <label>0</label>
          </ContainerComments>  
        </ContainerInteract>          
      </StyledCard>
  );
}

export default CardPost;
import './styled';
import { ContainerInteract, ContainerVotes, StyledCard, Content, UserName } from './styled';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const CardComment = (props) => {

  return (    
      <StyledCard>
        <UserName>Enviado por: {props.user}</UserName>
        <Content>{props.body}</Content>
        <ContainerInteract>
          <ContainerVotes>
            <ArrowUpwardIcon />
            <label>{props.voteSum}</label>
            <ArrowDownwardIcon />
          </ContainerVotes> 
        </ContainerInteract>          
      </StyledCard>
  );
}

export default CardComment;
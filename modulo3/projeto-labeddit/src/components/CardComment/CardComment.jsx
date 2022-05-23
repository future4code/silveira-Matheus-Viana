import './styled';
import { ContainerInteract, ContainerVotes, StyledCard, Content, UserName, ArrowUpActive, ArrowUp, ArrowDownActive, ArrowDown } from './styled';
import arrowUp from '../../assets/arrow-up.png';
import arrowUpActive from '../../assets/arrow-up-colored.png';
import arrowDown from '../../assets/arrow-down.png';
import arrowDownActive from '../../assets/arrow-down-colored.png';

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
        </ContainerInteract>          
      </StyledCard>
  );
}

export default CardComment;
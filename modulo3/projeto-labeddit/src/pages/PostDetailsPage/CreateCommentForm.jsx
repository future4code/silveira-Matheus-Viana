import React, { useState } from 'react';
import { ContainerButton, ContainerForm, StyledButton, StyledTextField } from './styled';
import useForm from '../../hooks/useForm';
import { useParams } from 'react-router-dom';
import { createComment } from '../../services/comments';
import CircularProgress from '@material-ui/core/CircularProgress';

const CreateCommentForm = () => {
  const params = useParams(); 
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChangeForm, cleanFields } = useForm({ body: "" });
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, cleanFields, params, setIsLoading);
  }
  

  return (
      <ContainerForm>
        <form onSubmit={onSubmitForm}>
        <StyledTextField
          name="body"
          value={form.body}
          onChange={onChangeForm}
          id="outlined-multiline-static"
          label="Adicionar comentário"
          multiline
          minRows={4}
          fullWidth
          variant="outlined"
          required
        />

        <ContainerButton>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: 10 }}
          > 
            {isLoading ? <CircularProgress color='inherit' size={24}/> : <>Responder</>} 
          </StyledButton>
        </ContainerButton>

        </form>
      </ContainerForm>
  );
}

export default CreateCommentForm;
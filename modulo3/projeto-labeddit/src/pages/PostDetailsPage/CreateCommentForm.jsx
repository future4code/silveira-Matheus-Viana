import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ContainerButton, ContainerForm } from './styled';
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
        <TextField
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: 10 }}
          > 
            {isLoading ? <CircularProgress color='inherit' size={24}/> : <>Responder</>} 
          </Button>
        </ContainerButton>

        </form>
      </ContainerForm>
  );
}

export default CreateCommentForm;
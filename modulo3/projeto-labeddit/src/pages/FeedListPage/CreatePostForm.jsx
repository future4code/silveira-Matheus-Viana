import React, { useState } from 'react';
import { ContainerButton, ContainerForm, ContainerTitle, StyledButton, StyledTextField } from './styled';
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/posts';
import CircularProgress from '@material-ui/core/CircularProgress';

const CreatePostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChangeForm, cleanFields } = useForm({ title: "", body: "" });
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, cleanFields, setIsLoading);
  }

  return (
      <ContainerForm>
        <form onSubmit={onSubmitForm}>
          <ContainerTitle>
            <StyledTextField
              name="title"
              value={form.title}
              onChange={onChangeForm}
              id="outlined-multiline-static"
              label="Título do post"
              multiline
              fullWidth
              variant="outlined"
              required
            />
          </ContainerTitle>

          <StyledTextField
            name="body"
            value={form.body}
            onChange={onChangeForm}
            id="outlined-multiline-static"
            label="Escreva seu post"
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
              {isLoading ? <CircularProgress color='inherit' size={24}/> : <>Postar</>} 
            </StyledButton>
          </ContainerButton>
        </form>
      </ContainerForm>
  );
}

export default CreatePostForm;
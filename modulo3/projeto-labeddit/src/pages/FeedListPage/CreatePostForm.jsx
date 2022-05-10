import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ContainerButton, ContainerForm } from './styled';

const CreatePostForm = () => {
  

  return (
      <ContainerForm>
        <form>
        <TextField
          id="outlined-multiline-static"
          label="Escreva seu post"
          multiline
          minRows={4}
          fullWidth
          variant="outlined"
        />

        <ContainerButton>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: 10 }}
          > 
            Postar
          </Button>
        </ContainerButton>

        </form>
      </ContainerForm>
  );
}

export default CreatePostForm;
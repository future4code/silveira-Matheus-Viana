import axios from 'axios';
import { BASE_URL } from '../constants/ulrs';

export const createPost = (body, cleanFields, setIsLoading) => {
  setIsLoading(true);  
  axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      alert(res.data);
      cleanFields();
    setIsLoading(false); 
    }).catch((err) => {
    setIsLoading(false); 
      alert(err.message)
    })
  }
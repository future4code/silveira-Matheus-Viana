import axios from 'axios';
import { BASE_URL } from '../constants/ulrs';

export const createComment = (body, cleanFields, params, setIsLoading) => {
    setIsLoading(true);  
    axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
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
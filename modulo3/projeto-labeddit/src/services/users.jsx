import axios from 'axios';
import { BASE_URL } from '../constants/ulrs';
import { goToFeed } from '../routes/coordinator';

export const login = (body, cleanFields, navigate, setRightButtonText) => {
  axios.post(`${BASE_URL}/users/login`, body)
  .then((res)=>{
    localStorage.setItem("token",res.data.token);
    cleanFields();
    goToFeed(navigate);
    setRightButtonText('Logout');
  })
  .catch((err)=>{
    alert(err.response.data)
  })
}

export const signup = (body, cleanFields, navigate, setRightButtonText) => {
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res)=>{
    localStorage.setItem("token",res.data.token);
    cleanFields();
    goToFeed(navigate);
    setRightButtonText('Logout');
  })
  .catch((err)=>{
    alert(err.response.data)
  })
}
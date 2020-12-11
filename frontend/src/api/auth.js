// import axios from 'axios';
import Api from './api';


export const registrationRequest = (data) => {
  return Api('post', '/auth/register', data);
};

export const loginRequest = (data) => {
  return Api('post', '/auth/login', data);
};

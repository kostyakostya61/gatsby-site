import axios from 'axios';

const host = 'http://localhost:5000';

const api = async (method, url, data) => {
  console.log(method, url, data);
  try {
    return await axios[method](`${host}${url}`, data);
  } catch (e) {
    console.log('Erros');
    throw e;
  }
};

export const registrationRequest = (data) => {
  return api('post', '/auth/register', data);
};

export const loginRequest = (data) => {
  return api('post', '/auth/login', data);
};

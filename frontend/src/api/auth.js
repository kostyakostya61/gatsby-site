import Api from './api';

export const registrationRequest = (data) => {
  return Api('post', '/auth/register', data);
};

export const loginRequest = (data) => {
  return Api('post', '/auth/login', data);
};

export const nameRequest = (headers) => {
  return Api('get', '/auth/name', null, { token: headers });
};

export const changeDataRequest = (data, headers) => {
  return Api('put', '/auth/change-data', data, { token: headers });
};

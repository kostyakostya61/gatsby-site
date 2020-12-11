// import React from 'react';
import axios from 'axios';

const host = 'http://localhost:5000';
const Api = async (method, url, data) => {
  console.log(method, url, data);
  try {
    return await axios[method](`${host}${url}`, data);
  } catch (e) {
    console.log('Erros');
    throw e;
  }
};

export default Api;

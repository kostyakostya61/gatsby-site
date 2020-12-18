// import React from 'react';
import axios from 'axios';

const host = 'http://localhost:5000';
const Api = async (method, url, data, headers) => {
  console.log(method, url, data);
  console.log(headers);
  try {
    return await axios({
      method: method,
      baseURL: url,
      headers: headers,
      data: data,
    });

    // return await axios[method](`${host}${url}`, {
    //   headers: headers,
    //   data,
    // });
  } catch (e) {
    console.log('Erros');
    throw e;
  }
};

export default Api;

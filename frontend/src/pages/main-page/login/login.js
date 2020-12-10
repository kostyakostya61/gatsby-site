import React, { useState, useMemo } from 'react';
import style from './login.module.scss';
import { loginRequest } from '../../../api/auth';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState(null);
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  //   const formErrorValidator = (e) => {
  //       if () {
  //           setFormError()
  //       } else {
  //           setFormError('')
  //       }
  //   };
  const loginHandler = async () => {
    setFormError('');
    try {
      console.log(form);
      const data = await loginRequest(form);
      console.log(data);
    } catch (error) {
      if (error?.response?.data?.message) {
        setFormError(error.response.data.message);
      }
    }
  };
  return (
    <div className={style.modal}>
      <div className={style.string}>
        <form>
          <h1>Login form</h1>
          {formError && <div style={{ color: 'red' }}>{formError}</div>}
          <div>
            <label>Email</label>
            <input
              id="email"
              type="text"
              placeholder="Your email"
              type="text"
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              id="password"
              type="text"
              placeholder="Your password"
              name="password"
              type="password"
              onChange={changeHandler}
            />
          </div>

          <button type="button" onClick={loginHandler}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;

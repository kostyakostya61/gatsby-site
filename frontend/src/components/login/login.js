import React, { useContext } from 'react';
import style from './login.module.scss';
import { loginRequest } from '../../api/auth';
import { Form, Field } from 'react-final-form';
import { loginValidation } from '../../utils/validator';
import { AuthContext } from '../context/auth-context';

function Login() {
  console.log(AuthContext);
  const onSubmit = async (values) => {
    // loginRequest(values);
    // auth.login(values.token);
    try {
      const loginValue = await loginRequest(values);
      console.log(loginValue);
      // const logIn = ;
    } catch (e) {
      console.log(e);
    }
  };

  const ErrorValid = ({ meta }) => {
    {
      return (meta.error || meta.submitError) && meta.touched ? (
        <span>{meta.error || meta.submitError}</span>
      ) : (
        <></>
      );
    }
  };

  return (
    <div className={style.modal}>
      <Form
        onSubmit={onSubmit}
        validate={loginValidation}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label> Email</label>
                  <input
                    {...input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Your Password"
                    name="password"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <button type="submit">Login</button>
          </form>
        )}
      />
    </div>
  );
}
export default Login;

import React from 'react';
import style from './login.module.scss';
import { loginRequest } from '../../api/auth';
import { Form, Field } from 'react-final-form';
import {emailValidation,passwordValidationLogin} from '../../utils/validator';




function Login() {
  const onSubmit = (values) => {
    loginRequest(values);
  };

  const Error = ({ name }) => (
    <Field name={name} subscription={{ error: true }}>
      {({ meta: { error } }) => (error ? <span>{error}</span> : null)}
    </Field>
  );

  return (
    <div className={style.modal}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Field name="email" validate={emailValidation}>
              {({ input }) => (
                <div>
                  <label> Email</label>
                  <input {...input} type="email" placeholder="Your Email" />
                </div>
              )}
            </Field>
            <div className={style.error}>
              <Error name="email" />
            </div>
            <Field name="password" validate={passwordValidationLogin}>
              {({ input }) => (
                <div>
                  <label>Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
              )}
            </Field>
            <div className={style.error}>
              <Error name="password" />
            </div>
            <button>Login</button>
          </form>
        )}
      />
    </div>
  );
}
export default Login;

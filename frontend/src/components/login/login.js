import React from 'react';
import style from './login.module.scss';
import { loginRequest } from '../../api/auth';
import { Form, Field } from 'react-final-form';
import { validation } from '../../utils/validator';

function Login() {
  const onSubmit = (values) => {
    loginRequest(values);
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
        validate={validation}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Field name="currentEmail">
              {({ input, meta }) => (
                <div>
                  <label> Email</label>
                  <input
                    {...input}
                    type="email"
                    name="currentEmail"
                    placeholder="Your Email"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <Field name="currentPassword">
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Your Password"
                    name="currentPassword"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <button>Login</button>
          </form>
        )}
      />
    </div>
  );
}
export default Login;

import React from 'react';
import style from './register.module.scss';
import { registrationRequest } from '../../api/auth';
import { Form, Field } from 'react-final-form';
import { validation } from '../../utils/validator';

function Registration() {
  
  const onSubmit = (values) => {
    console.log(values);
    registrationRequest(values);
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
            <h1>Registration</h1>
            <Field name="name">
              {({ input, meta }) => (
                <div>
                  <label>Name</label>
                  <input
                    {...input}
                    name="name"
                    type="name"
                    placeholder="Your Name"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <Field name="lastname">
              {({ input, meta }) => (
                <div>
                  <label>Lastname</label>
                  <input
                    {...input}
                    type="lastname"
                    placeholder="Your Lastname"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label> Email</label>
                  <input {...input} type="email" placeholder="Your Email" />
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
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <Field name="repeatPassword">
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Confirm Your Password"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <button type="submit">Registration</button>
          </form>
        )}
      />
    </div>
  );
}

export default Registration;

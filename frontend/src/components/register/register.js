import React from 'react';
import style from './register.module.scss';
import { registrationRequest } from '../../api/auth';
import { Form, Field } from 'react-final-form';
import {
  emailValidation,
  lastnameValidation,
  passwordValidationRegister,
  repeatPasswordValidationRegister,
} from '../../utils/validator';

function Registration() {
  const onSubmit = (values) => {
    registrationRequest(values);
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
            <h1>Registration</h1>
            <Field name="name" validate={lastnameValidation}>
              {({ input }) => (
                <div>
                  <label>Name</label>
                  <input {...input} type="name" placeholder="Your Name" />
                </div>
              )}
            </Field>
            <div className={style.error}>
              <Error name="name" />
            </div>

            <Field name="lastname" validate={lastnameValidation}>
              {({ input }) => (
                <div>
                  <label>Lastname</label>
                  <input
                    {...input}
                    type="lastname"
                    placeholder="Your Lastname"
                  />
                </div>
              )}
            </Field>
            <div className={style.error}>
              <Error name="lastname" />
            </div>

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
            <Field name="password" validate={passwordValidationRegister}>
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
            <Field
              name="repeatPassword"
              validate={repeatPasswordValidationRegister}
            >
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
              <Error name="repeatPassword" />
            </div>
            <button>Registration</button>
          </form>
        )}
      />
    </div>
  );
}

export default Registration;

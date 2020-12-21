import React, { useCallback, useContext, useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { UserContext } from '../context/user-context';
import style from './change-data.module.scss';
import { changeDataRequest } from '../../api/auth';
import { changeDataValidation } from '../../utils/validator';
import { AuthContext } from '../context/auth-context';
import { Spinner } from '@blueprintjs/core';

function ChangeData() {
  const [userValue, setUserValue] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const ErrorValid = ({ meta }) => {
    {
      return (meta.error || meta.submitError) && meta.touched ? (
        <span>{meta.error || meta.submitError}</span>
      ) : (
        <></>
      );
    }
  };
  const onSubmit = async (values) => {
    setError('');
    setIsLoading(true);
    try {
      await changeDataRequest(values, token);
      setIsLoading(false);
    } catch (e) {
      console.log(e.response.data.message);
      if (e.response.data?.message) {
        setError(e.response.data.message);
        setIsLoading(false);
      }
    }
  };
  //   const errorValue = ()=>{
  //       setError(error)
  //   }
  const userName = useCallback(async (values) => {
    const userNameValue = await user.findUser(values);

    setUserValue({
      name: userNameValue.user_first_name,
      lastname: userNameValue.user_last_name,
      email: userNameValue.user_email,
    });
    return userNameValue;
  }, []);
  useEffect(() => {
    userName();
  }, []);
  return (
    <div className={style.modal}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: userValue.name,
          lastname: userValue.lastname,
          email: userValue.email,
        }}
        validate={changeDataValidation}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <h3>Change your data</h3>
            {error && <p className={style.error_text}>{error}</p>}
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
                    placeholder="Your current password"
                  />
                  {/* <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div> */}
                </div>
              )}
            </Field>

            <Field name="newPassword">
              {({ input, meta }) => (
                <div>
                  <label> Write your new Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Your  New Password"
                  />
                  <div className={style.error}>
                    <ErrorValid meta={meta} />
                  </div>
                </div>
              )}
            </Field>

            <button type="submit">
              Change
              {isLoading ? <Spinner size="20" intent="primary" /> : null}
            </button>
          </form>
        )}
      />
    </div>
  );
}

export default ChangeData;

import React, { useState, useEffect, useMemo } from 'react';
import style from './register.module.scss';
import { registrationRequest } from '../../../api/auth';

function Registration() {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const emailValue = useMemo(() => {
    return form.email;
  }, [form]);
  const passwordlValue = useMemo(() => {
    return form.password;
  }, [form]);

  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Password не может быть пустым'
  );
  // const [validForm, setValidForm] = useState(false);

  // useEffect(() => {
  //   if (emailError || passwordError) {
  //     setValidForm(false);
  //   } else {
  //     setValidForm(true);
  //   }
  // }, [emailError, passwordError]);

  const emailValidator = (e) => {
    setForm(e.target.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };
  const passwordValidator = (e) => {
    setPasswordError(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не менее 6 символов');
      if (!e.target.value) {
        setPasswordError('Password не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const registerHandler = async () => {
    console.log('fdgd');
    try {
      console.log(form);

      const data = await registrationRequest(form);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const blueHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <div className={style.main}>
      {/* <div className={style.background}></div> */}
      <div className={style.modal}>
        <div className={style.string}>
          <form>
            <h1>Registration form</h1>

            <div>
              <label>Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                type="text"
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Lastname</label>
              <input
                id="lastname"
                type="text"
                placeholder="Your Lastname"
                type="text"
                name="lastname"
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Email</label>
              {emailDirty && emailError && (
                <div style={{ color: 'red' }}>{emailError}</div>
              )}
              <input
                id="email"
                type="text"
                placeholder="Your email"
                type="text"
                name="email"
                onChange={(changeHandler, emailValidator)}
                onBlur={(e) => blueHandler(e)}
                value={emailValue}
              />
            </div>
            <div>
              <label>Password</label>
              {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
              <input
                id="password"
                type="text"
                placeholder="Your password"
                name="password"
                type="password"
                onChange={(changeHandler, passwordValidator)}
                onBlur={(e) => blueHandler(e)}
                value={passwordlValue}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                id="password2"
                type="text"
                placeholder="Repeat your password"
                name="password"
                type="password"
                onChange={(changeHandler, passwordValidator)}
                onBlur={(e) => blueHandler(e)}
                value={passwordlValue}
              />
            </div>

            <button
              // disabled={!validForm}
              type="button"
              onClick={registerHandler}
            >
              Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;

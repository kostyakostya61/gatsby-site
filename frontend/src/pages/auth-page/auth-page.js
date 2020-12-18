import React, { useCallback, useContext, useEffect, useState } from 'react';
import style from './auth-page.module.scss';
import image from '../../images/image.png';
// import Description from '../../components/auth-page-components/description/description';
import { AuthContext } from '../../components/context/auth-context';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../components/context/user-context';
import { nameRequest } from '../../api/auth';
import { Spinner } from '@blueprintjs/core';
import Description from '../../components/auth-page-components/description/description';

function AuthPage() {
  const [userValue, setUserValue] = useState({});
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  // console.log(user.data);
  let history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };
  console.log(userValue);
  const userName = useCallback(async (values) => {
    // const userNameValue = await nameRequest(values);
    // console.log(userNameValue.data.user_first_name);
    const userNameValue = await user.findUser(values);

    setUserValue({ name: userNameValue.user_first_name });
    return userNameValue;
  }, []);

  const linkArray = [
    {
      name: 'OVERVIEW',
      href: 'overview',
    },
    {
      name: 'FEATURES',
      href: 'features',
    },
    {
      name: 'TECHNOLOGY',
      href: 'technology',
    },
    {
      name: 'CONTACT',
      href: 'contact',
    },
    {
      name: 'EDIT PROFILE',
      href: 'change-data',
    },
  ];

  const linkComponents = linkArray.map((link) => {
    return (
      <div>
        <a href={link.href}>{link.name}</a>
      </div>
    );
  });

  useEffect(() => {
    userName();
  }, [userName]);

  // if (!userValue.user_first_name) {
  //   return <Spinner intent={'primary'} />;
  // }

  return (
    <>
      <div className={style.container}>
        <div className={style.shade}>
          <div className={style.content}>
            <div className={style.navigation}>
              <div className={style.brand}>
                <div>
                  <img src={image} />
                </div>
                <div>
                  <p>CLOUDBUDGET</p>
                </div>
              </div>

              <div className={style.navbar}>
                <div className={style.link}>{linkComponents}</div>
              </div>

              <div className={style.identification}>
                <div className={style.btn}>
                  <button onClick={logoutHandler}>LOG OUT</button>
                </div>
              </div>
            </div>

            <div className={style.header}>
              <h3>CLOUDBUDGET</h3>

              <div className={style.greeting}>
                {!userValue.name ? (
                  <Spinner intent="primary" />
                ) : (
                  <p>Hello {userValue.name}!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </>
  );
}

export default AuthPage;

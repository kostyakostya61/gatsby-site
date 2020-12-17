import React, { useContext, useState } from 'react';
import style from './auth-page.module.scss';
import image from '../../images/image.png';
import Description from '../../components/auth-page-components/description/description';
import { AuthContext } from '../../components/context/auth-context';
import { useHistory } from 'react-router-dom';

function AuthPage() {
  const auth = useContext(AuthContext);
  let history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

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
      name: 'PROVIDERS',
      href: 'providers',
    },
  ];

  const linkComponents = linkArray.map((link) => {
    return (
      <div>
        <a href={link.href}>{link.name}</a>
      </div>
    );
  });
  return (
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

            <div className={style.description}>
              <p>
                Cloud budget management for everyone. Only €69.95 a Month After
                a 7 Day Trial of Up to €4.99
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

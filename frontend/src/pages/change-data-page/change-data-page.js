import React, { useCallback, useContext, useEffect, useState } from 'react';
import style from './change-data-page.module.scss';
import image from '../../images/image.png';

import { AuthContext } from '../../components/context/auth-context';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../components/context/user-context';

import { Spinner } from '@blueprintjs/core';
import Modal from '../../components/modal/modal';
import ChangeData from '../../components/change-data/change-data';

function AuthPage() {
  const [userValue, setUserValue] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  const handleCLoseModdal = () => {
    setIsOpen(false);
  };

  let history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  const userName = useCallback(
    async (values) => {
      const userNameValue = await user.findUser(values);

      setUserValue({ name: userNameValue.user_first_name });
      return userNameValue;
    },
    [user]
  );

  const linkArray = [
    {
      name: 'MAIN PAGE',
      href: 'auth-page',
    },
    {
      name: 'NOTES PAGE',
      href: 'notes-page',
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
  }, []);

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

            <div className={style.greeting}>
              {!userValue.name ? (
                <Spinner intent="primary" />
              ) : (
                <p>Hello {userValue.name}!</p>
              )}
            </div>
            <div className={style.description}>
              <h3>Do you want to edit your profile?</h3>
            </div>
            <div className={style.edit_button}>
              <button onClick={() => setIsOpen(true)}>Click here</button>
              {isOpen && (
                <Modal onClose={handleCLoseModdal}>
                  {/* <ChangeData /> */}
                  <ChangeData />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

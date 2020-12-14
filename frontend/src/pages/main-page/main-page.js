import React, { useState } from 'react';
import style from './main-page.module.scss';
import image from '../../images/image.png';
import Registration from '../../components/register/register';
import Modal from '../../components/modal/modal';
import Login from '../../components/login/login';



function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleCLoseModdal = () => {
    console.log('close');
    setIsOpen(false);
    setIsLogin(false);
  };
  const linkArray = [
    {
      id: 1,
      name:'OVERVIEW',
      href:'overview'
    },
    {
      id: 2,
      name:'FEATURES',
      href:'features'
    },
    {
      id: 3,
      name:'TECHNOLOGY',
      href:'technology'
    },
    {
      id: 4,
      name:'CONTACT',
      href:'contact'
    },
    {
      id: 5,
      name:'PROVIDERS',
      href:'providers'
    }
  ]

  const linkComponents = linkArray.map (link =>{return <div><a href={link.href}>{link.name}</a></div>})
  return (
    <div className={style.container}>
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

          <div className={style.identification }>
            <div className={style.btn}>
              <button onClick={() => setIsOpen(true)}>SIGN UP</button>
              {isOpen && (
                <Modal onClose={handleCLoseModdal}>
                  <Registration />
                </Modal>
              )}
            </div>
            <div className={style.btn}>
              <button onClick={() => setIsLogin(true)}>LOGIN</button>
              {isLogin && (
                <Modal onClose={handleCLoseModdal}>
                  <Login />
                </Modal>
              )}
            </div>
          </div>
        </div>

        {/* <div className={style.company}> */}
        <div className={style.header}>
          <h3>CLOUDBUDGET</h3>

          <div className={style.description}>
            <p>
              Cloud budget management for everyone. Only €69.95 a Month After a
              7 Day Trial of Up to €4.99
            </p>
          </div>
        </div>

        <div className={style.sign_up}>
          <button onClick={() => setIsOpen(true)}>SIGN UP</button>
          {isOpen && (
            <Modal onClose={handleCLoseModdal}>
              <Registration />
            </Modal>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default MainPage;

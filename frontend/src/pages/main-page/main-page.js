import React, { useState } from 'react';
import style from './main-page.module.scss';
import image from './images/image.png';
import Registration from './register/register';

function MainPage() {
  const [registerForm, setRegisterForm] = useState(true);

  // function showRegisterForm() {
  //   if (!registerForm) {
  //     return <Registration />;
  //   }
  // }
  // const handleShow = () => setRegisterForm(true);

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
            <div className={style.link}>
              <a href="overview">OVERVIEW</a>
            </div>
            <div className={style.link}>
              <a href="features">FEATURES</a>
            </div>
            <div className={style.link}>
              <a href="technology">TECHNOLOGY</a>
            </div>
            <div className={style.link}>
              <a href="contact">CONTACT</a>
            </div>
            <div className={style.link}>
              <a href="providers">PROVIDERS</a>
            </div>
          </div>

          <div className={style.buttons}>
            <div className={style.btn} onClick={() => setRegisterForm(true)}>
              <button>SIGN UP</button>
            </div>
            <div className={style.btn}>
              <button href="#">LOGIN</button>
            </div>
          </div>
        </div>

        <div className={style.company}>
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

        <div className={style.sign_up}>
          <button href="#">SIGN UP</button>
        </div>
      </div>
      <Registration active={registerForm} setActive={setRegisterForm} />
    </div>
  );
}

export default MainPage;

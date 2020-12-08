import React from 'react';
import style from './main-page.module.scss';
import image from './images/image.png';

function MainPage() {
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
              <a href="overview">FEATURES</a>
            </div>
            <div className={style.link}>
              <a href="overview">TECHNOLOGY</a>
            </div>
            <div className={style.link}>
              <a href="overview">CONTACT</a>
            </div>
            <div className={style.link}>
              <a href="overview">PROVIDERS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

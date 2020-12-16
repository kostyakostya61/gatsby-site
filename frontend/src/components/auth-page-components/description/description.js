import React from 'react';
import style from './description.module.scss';
import video from '../../../images/video.png';
import button from '../../../images/button.png';

function Description() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.about_company}>
          <div className={style.header}>
            <h1>Easy to Use Cloud Budget Management Softwar</h1>
          </div>
          <div className={style.description}>
            <p>
              Our software is made so you can access and manage your budget and
              expenses online at any time from any device. It provides detailed
              income and expense reports with graphs so you can easilly see your
              spending patterns and budget at a glance. Read below to find out
              more.
            </p>
          </div>
          <div className={style.link}>
            <a href="lern_more">Learn more</a>
          </div>
        </div>
        <div className={style.videoplayer}>
          <div className={style.video}>
            <img src={video} />
          </div>
          <div className={style.button}>
            <button>
              <img src={button} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;

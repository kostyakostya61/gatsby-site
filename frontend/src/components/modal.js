import React, { useState } from 'react';
import style from './modal.module.scss';

// onClick={()=>setActive(false)}
//

function Modal(onClose) {
  return (
    <div className={style.modal} >
      <div className={style.content}></div>
    </div>
  );
}

export default Modal;

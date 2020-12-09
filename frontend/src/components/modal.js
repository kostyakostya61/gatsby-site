import React from 'react';
import style from './modal.module.scss';

function Modal({active, setActive}) {
  return (
    <div className={ active ? style.modal.active : style.modal } onClick={()=>setActive(false)}>
      <div className={style.content} onClick={e => e.stopPropagation()}></div>
    </div>
  );
}

export default Modal 
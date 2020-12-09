import React from 'react';
import style from './register.module.scss';

function Registration({ active, setActive }) {
  return (
    <div className={style.main} onClick={() => setActive(false)}>
      <div className={style.background}></div>
      <div
        className={active ? style.modal.active : style.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.string}>
          <form actio="">
            <h1>Registration form</h1>

            <div>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div>
              <label>Lastname</label>
              <input type="text" placeholder="Your Lastname" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="Your email" />
            </div>
            <div>
              <label>Password</label>
              <input type="text" placeholder="Your password" />
            </div>
            <div>
              <label>Password</label>
              <input type="text" placeholder="Repeat your password" />
            </div>

            <button>Registration</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;

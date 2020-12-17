import React, { useEffect } from 'react';

import style from './container.module.scss';

import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function Container() {
  const routes = useRoutes();

  return (
    <Router>
      <div className={style.container}>{routes}</div>
    </Router>
  );
}

export default Container;

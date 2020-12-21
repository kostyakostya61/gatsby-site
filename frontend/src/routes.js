import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './components/context/auth-context';
import PrivateRoute from './components/route/route';
import AuthPage from './pages/auth-page/auth-page';
import ChangeDataPage from './pages/change-data-page/change-data-page';
import MainPage from './pages/main-page/main-page';

export const useRoutes = () => {
  const auth = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {}, [auth]);
  if (isAuth) {
    return (
      <Switch>
        <PrivateRoute path="/auth-page">
          <AuthPage />
        </PrivateRoute>
        <PrivateRoute to="/change-data">
          <ChangeDataPage />
        </PrivateRoute>
        <Redirect to="/auth-page" />
      </Switch>
      // <Switch>
      //   <Route path="/auth-page" exact>
      //     <AuthPage />
      //   </Route>
      //   <Route to="/change-data">
      //     <ChangeDataPage />
      //   </Route>
      //   <Redirect to="/auth-page" />
      // </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
    </Switch>
  );
};

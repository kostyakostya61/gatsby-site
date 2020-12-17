import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Description from './components/auth-page-components/description/description';
import { AuthContext } from './components/context/auth-context';
import AuthPage from './pages/auth-page/auth-page';
import MainPage from './pages/main-page/main-page';

export const useRoutes = () => {
  const auth = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {}, [auth]);
  if (isAuth) {
    return (
      <Switch>
        <Route path="/auth-page" exact>
          <AuthPage />
          <Description />
        </Route>
      </Switch>
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

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/auth-page/auth-page';
import MainPage from './pages/main-page/main-page';

export const useRoutes = (isAuthenticated) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

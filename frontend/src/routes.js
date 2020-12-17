import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './components/context/auth-context';
import AuthPage from './pages/auth-page/auth-page';
import MainPage from './pages/main-page/main-page';

export const useRoutes = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  if (false) {
    return (
      <Switch>
        <Route path="/auth-page" exact>
          <AuthPage />
        </Route>
        {/* <Redirect to="/" /> */}
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

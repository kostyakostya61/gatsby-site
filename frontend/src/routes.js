import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthContext } from './components/context/auth-context';
import PrivateRoute from './components/route/route';
import AuthPage from './pages/auth-page/auth-page';
import ChangeDataPage from './pages/change-data-page/change-data-page';
import MainPage from './pages/main-page/main-page';
import NotesPage from './pages/notes-page/notes-page';

export const useRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Switch>
      <PrivateRoute path="/auth-page" renderComponent={isAuth}>
        <AuthPage />
      </PrivateRoute>
      <PrivateRoute path="/change-data" renderComponent={isAuth}>
        <ChangeDataPage />
      </PrivateRoute>
      <PrivateRoute path="/notes-page" renderComponent={isAuth}>
        <NotesPage />
      </PrivateRoute>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  );
};

import React, { useEffect } from 'react';
import MainPage from './pages/main-page/main-page';
import style from './container.module.scss';
// import AuthPage from './pages/auth-page/auth-page';
// import Description from './components/auth-page-components/description/description';
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './components/hooks/auth.hook';
import { AuthProvider } from './components/context/auth-context';
// import { AuthContext } from './components/context/auth-context';

function Container() {
  // const { token, login, logout } = useAuth();
  // const isAuthenticated = !!token;
  // const routes = useRoutes(isAuthenticated);
  const routes = useRoutes();

  return (
    <AuthProvider
    // value={{
    //   token,
    //   login,
    //   logout,
    //   isAuthenticated,
    // }}
    >
      <Router>
        <div className={style.container}>{routes}</div>
      </Router>
    </AuthProvider>
    // <AuthContext.Provider
    //   value={{
    //     token,
    //     login,
    //     logout,
    //     isAuthenticated,
    //   }}
    // >
    //   <Router>
    //     <div className={style.container}>{routes}</div>
    //   </Router>
    // </AuthContext.Provider>
  );
}

export default Container;

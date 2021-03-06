import React, { useState, createContext, useMemo, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const tokenValue = localStorage.getItem('token');
  const [token, setToken] = useState(tokenValue);
  const isAuth = useMemo(() => !!token, [token]);
  const login = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem('token', jwtToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };
  const contextValue = useMemo(() => ({ login, logout, token, isAuth }));
  useEffect(() => {
    // const tokenAuth = tokenValue;
    if (tokenValue) {
      login(tokenValue);
    }
  }, [login]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

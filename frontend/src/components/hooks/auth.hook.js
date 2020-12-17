// import { useState, useCallback, useEffect } from 'react';

// const storageName = 'token';
// export const useAuth = () => {
//   const [token, setToken] = useState(null);
//   console.log(token);
//   const login = useCallback((jwtToken) => {
//     setToken(jwtToken);
//     localStorage.setItem(storageName, jwtToken);
//   }, []);
//   const logout = useCallback(() => {
//     setToken(null);

//     localStorage.removeItem(storageName);
//   }, []);

//   useEffect(() => {
//     const tokenValue = localStorage.getItem(storageName);
//     if (tokenValue) {
//       login(tokenValue);
//     }
//   }, [login]);

//   return { login, logout, token };
// };

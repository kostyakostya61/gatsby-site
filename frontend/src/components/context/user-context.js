import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { nameRequest } from '../../api/auth';
import { AuthContext } from './auth-context';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { token } = useContext(AuthContext);
  const findUser = async () => {
    const user = await nameRequest(token);

    setUser(user.data);
    return user.data;
  };

  useEffect(() => {
    findUser();
  }, [token]);

  const contextValue = useMemo(
    () => ({
      findUser,
      user,
      token,
    }),
    [user]
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

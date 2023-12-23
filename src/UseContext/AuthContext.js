import { apiGetUsersCurrent } from 'Services/apiUser';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = (data) => {
    const { token, user } = data;
    setUser(user);
    localStorage.setItem('token', JSON.stringify({ token: token }));
    setAuthenticated(true);
  };

  useEffect(() => {
    const userLogged = async () => {
      try {
        const res = await apiGetUsersCurrent();
        setUser(res.data);
        setAuthenticated(true);
      } catch (error) {
        console.log(error);
      }
    };
    userLogged();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login,
        isAuthenticated: isAuthenticated
      }}>
      {children}
    </AuthContext.Provider>
  );
};

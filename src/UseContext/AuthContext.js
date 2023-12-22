import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [isAuthenticated, setAuthenticated] = useState(false);
 
  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isAuthenticated: isAuthenticated,
        setAuthenticated: setAuthenticated
      }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { useContext, useState } from 'react';
import { createContext } from "react";

interface User {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  bio: string
}

interface AuthContextData {
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>,
  token: string
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState('');
  
  
  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      token
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}


const useAuth = () => useContext(AuthContext);

export default useAuth;
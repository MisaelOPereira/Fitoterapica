import { createContext, useContext, useState } from 'react';
import { usersApi } from '../services/api';

interface AuthState {
  user: {
    id: string;
    name: string;
  }
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {
  name: string;
}

interface AuthContextData {
  user: {
    id: string;
    name: string;
  },
  signIn: (credentials: SignInData) => void;
  signOut: () => void;
  signUp: (credentials: SignUpData) => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactElement }) {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('user');
    
    if (user) {
      return {
        user: JSON.parse(user)
      }
    }

    return {} as AuthState;
  });
  
  function signIn({ email, password }: SignInData) {
    const user = usersApi.signIn({
      email,
      password
    });

    localStorage.setItem('user', JSON.stringify(user));

    setData({ user });
  }

  function signOut() {
    localStorage.removeItem('user');

    setData({} as AuthState);
  }

  function signUp({ name, email, password }: SignUpData) {
    const user = usersApi.signUp({
      name,
      email,
      password
    });

    localStorage.setItem('user', JSON.stringify(user));

    setData({ user });
  }
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

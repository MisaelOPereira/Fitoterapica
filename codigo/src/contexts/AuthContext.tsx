import { createContext, useContext, useState } from 'react';
import { usersApi } from '../services/api';

interface AuthState {
  user: {
    id: string;
    name: string;
    favorite_plants: string[];
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
    favorite_plants: string[];
  },
  signIn: (credentials: SignInData) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpData) => Promise<void>;
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
  
  async function signIn({ email, password }: SignInData) {
    const user = await usersApi.signIn({
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

  async function signUp({ name, email, password }: SignUpData) {
    const user = await usersApi.signUp({
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

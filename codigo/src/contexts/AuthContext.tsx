import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

interface AuthState {
  user: {
    id: string;
    name: string;
  }
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    id: string;
    name: string;
  },
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
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
  
  function signIn({ email, password }: SignInCredentials) {
    const user = api.auth({
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
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

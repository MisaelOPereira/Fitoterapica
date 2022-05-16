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
  addFavoritePlant: (plant: string) => Promise<void>;
  removeFavoritePlant: (plant: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
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

  async function addFavoritePlant(plant: string) {
    if (!data.user) {
      throw new Error('Faça login para adicionar uma planta aos favoritos.');
    }

    const updatedUser = await usersApi.addFavoritePlant(data.user.id, plant);

    localStorage.setItem('user', JSON.stringify(updatedUser));

    setData({ user: updatedUser });
  }

  async function removeFavoritePlant(plant: string) {
    const updatedUser = await usersApi.removeFavoritePlant(data.user.id, plant);

    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    setData({ user: updatedUser });
  }

  async function deleteAccount() {
    if(data.user) {
      await usersApi.deleteAccount(data.user.id);

      signOut();
    }
  }
  
  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn, signOut,
      signUp, 
      addFavoritePlant,
      removeFavoritePlant,
      deleteAccount
    }}>
      {children}
    </AuthContext.Provider>
  );
}

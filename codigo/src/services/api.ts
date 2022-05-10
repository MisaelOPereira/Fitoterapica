import axios from 'axios';
import { v4 as uuid } from 'uuid';

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  favorite_plants: string[];
}

export interface Plant {
  NomeComum: string;
  PlantId: string;
  OutrosNomesComuns: string[];
  NomeCientífico: string;
  AçãoSobreOCorpo: {
    UsoPrincipal: string;
    UsosRelacionados: string[];
    ContraIndicações: string[];
  }
  FormasDeUso: string[];
  PartesUsadas: string[];
  Regionalidade: string[];
  Origem: string;
}

export const api = axios.create({
  baseURL: 'https://fitoterapica-api.herokuapp.com'
});

export const usersApi = {
  signIn: async ({ email, password }: SignInData) => {
    const response = await api.get('/users');
    const users = response.data as User[];

    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
      return {
        id: user.id,
        name: user.name,
        favorite_plants: user.favorite_plants
      }
    } else {
      throw new Error('Não foi possível efetuar o login. Verifique as credenciais.');
    }
  },
  signUp: async ({ name, email, password }: SignUpData) => {
    const response = await api.get('/users');
    const users = response.data as User[];

    users.forEach(user => {
      if (user.email === email) {
        throw new Error('Este e-mail já está sendo utilizado.');
      }
    });
    
    const user = {
      id: uuid(),
      name,
      email,
      password,
      favorite_plants: []
    }

    users.push(user);

    api.post('users', user);

    return {
      id: user.id,
      name: user.name,
      favorite_plants: user.favorite_plants
    }
  }
}
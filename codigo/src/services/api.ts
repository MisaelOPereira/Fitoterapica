const users = [
  {
    id: '123',
    name: 'Gabriel Ferreira Marques Mendes',
    email: 'gabriel.ferreira5584@gmail.com',
    password: '123456'
  }
];

export const api = {
  auth: ({ email, password }: { email: string, password: string }) => {
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
      return {
        id: user.id,
        name: user.name
      }
    } else {
      throw new Error('Não foi possível efetuar o login. Verifique as credenciais.');
    }
  }
}
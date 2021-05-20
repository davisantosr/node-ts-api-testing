import request from 'supertest';
import server from '../shared/http/server';

const validUser = {
  name: 'user',
  email: 'usertest@email.com',
  password: '123456',
  age: 30,
  ethnicity: 'afro',
  phone: '99999999',
  weight: 900,
};

const postUser = (user: any) => {
  return request(server).post('/users/').send(user);
};

describe('user registration', () => {
  it('returns 200 ok when signup request is valid', async () => {
    const response = await postUser(validUser);
    expect(response.status).toBe(200);
  });
});

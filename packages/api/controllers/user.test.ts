import * as request from 'supertest';
import { app } from '../app';

describe('GET /user', () => {
  let token: string;

  beforeAll((done) => {
    request.agent(app).post('/api/login')
      .send({ userEmail: 'ale@alejandro.com', password: 'ladygaga' })
      .then(result => {
        token = result.body.token;
        done();
      });
  });

  it('Sould retrive user data without user password', (done) => {
    request.agent(app).get('/api/user')
      .set({ token: token })
      .send({ userEmail: 'ale@alejandro.com' })
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toStrictEqual({'id': 1, 'name': 'ale alejandro', 'user_email': 'ale@alejandro.com'});
        done();
      });
  });

  it('Sould return error when user not found', (done) => {
    request.agent(app).get('/api/user')
      .set({ token: token })
      .send({ userEmail: 'alejandro@alejandro.com' })
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('User not found!');
        done();
      });
  });
});

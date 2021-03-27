import * as request from 'supertest';
import { app } from '../app';

describe('POST /login', () => {
  it('Sould login successfully', (done) => {
    request.agent(app).post('/api/login')
      .send({ userEmail: 'ale@alejandro.com', password: 'ladygaga' })
      .then(result => {
        expect(result.status).toEqual(200);
        expect(result.body).toHaveProperty('token');
        expect(result.body.token.length).toBeGreaterThan(0);
        done();
      });
  });

  it('Sould return error when password does not match', (done) => {
    request.agent(app).post('/api/login')
      .send({ userEmail: 'ale@alejandro.com', password: 'ladygaga1' })
      .then(result => {
        expect(result.status).toEqual(409);
        expect(result.body).toHaveProperty('message');
        expect(result.body.message).toBe('Passwords do not match');
        done();
      });
  });

  it('Sould return error when user not found', (done) => {
    request.agent(app).post('/api/login')
      .send({ userEmail: 'alejandro@alejandro.com', password: 'ladygaga1' })
      .then(result => {
        expect(result.status).toEqual(404);
        expect(result.body).toHaveProperty('message');
        expect(result.body.message).toBe('User not found');
        done();
      });
  });
});

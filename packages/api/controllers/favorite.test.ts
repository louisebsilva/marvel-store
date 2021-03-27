import * as request from 'supertest';
import { app } from '../app';

describe('GET /favorite', () => {
  let token: string;

  beforeAll((done) => {
    request.agent(app).post('/api/login')
      .send({ userEmail: 'ale@alejandro.com', password: 'ladygaga' })
      .then(result => {
        token = result.body.token;
        done();
      });
  });

  it('Sould retrive user favorites', (done) => {
    request.agent(app).get('/api/favorite')
      .set({ token: token })
      .send({ userID: 1 })
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toStrictEqual([{'favorite_id': '1009351', 'id': 1, 'id_user': 1, 'type': 'comic'}]);
        done();
      });
  });

  it('Sould return error when user favorites not found', (done) => {
    request.agent(app).get('/api/favorite')
      .set({ token: token })
      .send({ userID: 2 })
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Favorites not found!');
        done();
      });
  });
});

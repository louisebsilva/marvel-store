import { Router } from 'express';
import { MarvelData } from '../controllers/marvel';
import { User } from '../controllers/user';
import { Auth } from '../controllers/auth';
import { Favorite } from '../controllers/favorite';
import { checkJwt } from '../middlewares/checkJWT';

const marvelRouter = Router()
  .get('/marvel', [checkJwt], MarvelData.getAll)
  .get('/marvel/:id', [checkJwt], MarvelData.getOne);

const userRouter = Router()
  .post('/user', User.create)
  .get('/user', [checkJwt], User.get)
  .put('/user', [checkJwt], User.update);

const authRouter = Router()
  .post('/login', Auth.login);

const favoriteRouter = Router()
  .post('/favorite', [checkJwt], Favorite.create)
  .get('/favorite', [checkJwt], Favorite.get)
  .delete('/favorite', [checkJwt], Favorite.delete);

const router = Router();

router
  .use('/api', marvelRouter)
  .use('/api', userRouter)
  .use('/api', authRouter)
  .use('/api', favoriteRouter);

export default router;

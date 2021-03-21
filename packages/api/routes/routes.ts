import { Router } from "express";
import { MarvelData } from "../controllers/marvel";
import { User } from '../controllers/user';

const marvelRouter = Router()
  .get('/marvel', MarvelData.getAll)
  .get('/marvel/:id', MarvelData.getOne);

const userRouter = Router()
  .post('/user', User.create)
  .get('/user', User.get)
  .put('/user', User.update);

const router = Router();

router
  .use('/api', marvelRouter)
  .use('/api', userRouter);

export default router;

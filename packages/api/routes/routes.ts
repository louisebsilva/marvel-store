import { Router } from "express";
import { MarvelData } from "../controllers/marvel";
import { User } from '../controllers/user';
import { Auth } from '../controllers/auth';
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

const router = Router();

router
  .use('/api', marvelRouter)
  .use('/api', userRouter)
  .use('/api', authRouter);

export default router;

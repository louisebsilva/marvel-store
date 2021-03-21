import { Router } from "express";
import { MarvelData } from "../controllers/marvel";

const marvelRouter = Router()
  .get('/marvel', MarvelData.getAll)
  .get('/marvel/:id', MarvelData.getOne);

const router = Router();

router
  .use('/api', marvelRouter);

export default router;

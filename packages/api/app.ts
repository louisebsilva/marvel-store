import * as dotenv from 'dotenv';
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes';

export const app = express();
dotenv.config();

app
  .use(bodyParser.json())
  .use(cors())
  .use(router);

app.listen(process.env.PORT, () => {
  console.log(`Node server started running on PORT ${process.env.PORT}`);
});

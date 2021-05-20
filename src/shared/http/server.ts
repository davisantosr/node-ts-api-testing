import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes/index';
import '@shared/typeorm';
import AppErrorMiddleware from '../middlewares/appErrorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use(AppErrorMiddleware);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});

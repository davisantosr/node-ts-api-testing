import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';
import isAuthenticated from '@shared/middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.get('/:id', usersController.retrieve);
usersRouter.delete('/:id', usersController.delete);
usersRouter.put('/:id', usersController.update);
usersRouter.post(
  '/session',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.createSession,
);
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      age: Joi.number().required(),
      ethnicity: Joi.string().required(),
      phone: Joi.number().required(),
      weight: Joi.number().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;

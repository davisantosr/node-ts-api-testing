import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.retrieve);
usersRouter.delete('/:id', usersController.delete);
usersRouter.put('/:id', usersController.update);
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

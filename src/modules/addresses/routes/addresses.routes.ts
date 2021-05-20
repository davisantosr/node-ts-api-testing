import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AddressController from '../controllers/AddressController';

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get('/', addressController.index);
addressRouter.get('/:id', addressController.retrieve);
addressRouter.delete('/:id', addressController.delete);
addressRouter.put('/:id', addressController.update);
addressRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      address: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      number: Joi.number().required(),
      complement: Joi.string().required(),
      cep: Joi.string().required(),
    },
  }),
  addressController.create,
);

export default addressRouter;

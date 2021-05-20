import { Request, Response } from 'express';
import CreateAddressService from '../services/CreateAddressService';
import ListAddressesService from '../services/ListAddressesService';
import UpdateAddressService from '../services/UpdateAddressService';
import DeleteAddressService from '../services/DeleteAddressService';
import RetrieveAddressService from '../services/RetrieveAddressService';

export default class AddressController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAddresses = new ListAddressesService();

    const addresses = await listAddresses.execute();

    return response.json(addresses);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { address, number, complement, cep, city, state } = request.body;

    const createAddress = new CreateAddressService();

    const addressInstance = await createAddress.execute({
      address,
      number,
      complement,
      cep,
      city,
      state,
    });

    return response.json(addressInstance);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { address, number, complement, cep, city, state } = request.body;

    const { id } = request.params;
    const address_id = Number(id);

    const updateAddress = new UpdateAddressService();

    const addressInstance = await updateAddress.execute({
      address_id,
      address,
      number,
      complement,
      cep,
      city,
      state,
    });

    return response.json(addressInstance);
  }

  public async retrieve(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const address_id = Number(id);

    const retrieveAddress = new RetrieveAddressService();

    const address = await retrieveAddress.execute({
      address_id,
    });

    return response.json(address);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const address_id = Number(id);

    const deleteAddress = new DeleteAddressService();

    const result = await deleteAddress.execute({
      address_id,
    });

    return response.status(200).json('success');
  }
}

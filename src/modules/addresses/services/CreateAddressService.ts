import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressRepository from '../typeorm/repositories/addressRepository';

interface IRequest {
  address: string;
  number: number;
  complement: string;
  cep: string;
  city: string;
  state: string;
}

class CreateAddressService {
  public async execute({
    address,
    number,
    complement,
    cep,
    city,
    state,
  }: IRequest): Promise<Address> {
    const addressRepository = getCustomRepository(AddressRepository);

    const addressData = addressRepository.create({
      address,
      number,
      complement,
      cep,
      city,
      state,
    });

    const newAddress = await addressRepository.save(addressData);

    return newAddress;
  }
}

export default CreateAddressService;

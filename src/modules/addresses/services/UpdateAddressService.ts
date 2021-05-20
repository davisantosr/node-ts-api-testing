import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressesRepository from '../typeorm/repositories/addressRepository';

interface IRequest {
  address_id: number;
  address: string;
  number: number;
  complement: string;
  cep: string;
  city: string;
  state: string;
}

class UpdateProfileService {
  public async execute({
    address_id,
    address,
    number,
    complement,
    cep,
    city,
    state,
  }: IRequest): Promise<Address> {
    const addressRepository = getCustomRepository(AddressesRepository);

    const addressIntance = await addressRepository.findById(address_id);

    if (!addressIntance) {
      throw new AppError('Address not found');
    }

    addressIntance.address = address;
    addressIntance.number = number;
    addressIntance.complement = complement;
    addressIntance.cep = cep;
    addressIntance.city = city;
    addressIntance.state = state;

    await addressRepository.save(addressIntance);

    return addressIntance;
  }
}

export default UpdateProfileService;

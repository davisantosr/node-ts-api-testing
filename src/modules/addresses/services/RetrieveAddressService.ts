import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressRepository from '../typeorm/repositories/addressRepository';

interface IRequest {
  address_id: number;
}

class RetrieveAddressService {
  public async execute({ address_id }: IRequest): Promise<Address | undefined> {
    const addressRepository = getCustomRepository(AddressRepository);

    const address = await addressRepository.findById(address_id);

    if (!address) {
      throw new AppError('Address not found');
    }

    return address;
  }
}

export default RetrieveAddressService;

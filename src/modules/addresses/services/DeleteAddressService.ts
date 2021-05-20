import AppError from '@shared/errors/AppError';
import { DeleteResult, getCustomRepository } from 'typeorm';
import AddressRepository from '../typeorm/repositories/addressRepository';

interface IRequest {
  address_id: number;
}

class DeleteAddressService {
  public async execute({ address_id }: IRequest): Promise<DeleteResult> {
    const addressRepository = getCustomRepository(AddressRepository);

    const address = await addressRepository.findById(address_id);

    if (!address) {
      throw new AppError('Address not found');
    }

    const result = await addressRepository.delete(address_id);
    if (!result) {
      throw new AppError(
        'Error occurs when tried to delete. Please try again.',
      );
    }

    return result;
  }
}

export default DeleteAddressService;

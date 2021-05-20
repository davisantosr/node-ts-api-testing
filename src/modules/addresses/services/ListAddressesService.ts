import { getCustomRepository } from 'typeorm';
import Address from '../typeorm/entities/Address';
import AddressRepository from '../typeorm/repositories/addressRepository';

class ListAddressesService {
  public async execute(): Promise<Address[]> {
    const addressRepository = getCustomRepository(AddressRepository);

    const addresses = await addressRepository.find();

    return addresses;
  }
}

export default ListAddressesService;

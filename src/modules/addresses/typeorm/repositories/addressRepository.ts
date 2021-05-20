import { EntityRepository, Repository } from 'typeorm';
import Address from '../entities/Address';

@EntityRepository(Address)
class AddressRepository extends Repository<Address> {
  public async findById(id: number): Promise<Address | undefined> {
    const address = await this.findOne({
      where: {
        id,
      },
    });

    return address;
  }
}

export default AddressRepository;

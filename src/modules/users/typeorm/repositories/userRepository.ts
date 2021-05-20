import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findById(id: number): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async deleteUser(id: number): Promise<DeleteResult> {
    const result = await this.delete(id);

    return result;
  }
}

export default UsersRepository;

import AppError from '@shared/errors/AppError';
import { DeleteResult, getCustomRepository, ObjectID } from 'typeorm';
import UsersRepository from '../typeorm/repositories/userRepository';

interface IRequest {
  user_id: number;
}

class DeleteUserService {
  public async execute({ user_id }: IRequest): Promise<DeleteResult> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);
    console.log('DELETE USER');

    if (!user) {
      throw new AppError('User not found');
    }

    const result = await usersRepository.deleteUser(user_id);
    if (!result) {
      throw new AppError(
        'Error occurs when tried to delete. Please try again.',
      );
    }

    return result;
  }
}

export default DeleteUserService;

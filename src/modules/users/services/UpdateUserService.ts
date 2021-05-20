import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/userRepository';

export enum Ethnicity {
  WHITE = 'white',
  BLACK = 'black',
  INDIGENOUS = 'indigenous',
  OTHER = 'other',
}

interface IRequest {
  user_id: number;
  name: string;
  phone: string;
  email: string;
  age: number;
  weight: number;
  ethnicity: Ethnicity;
  password?: string;
  old_password?: string;
}

class UpdateProfileService {
  public async execute({
    user_id,
    name,
    phone,
    email,
    age,
    weight,
    ethnicity,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    console.log('UPDATE==>');

    const userUpdateEmail = await usersRepository.findByEmail(email);

    if (userUpdateEmail && userUpdateEmail.id !== user_id) {
      throw new AppError('There is already an user with this email.');
    }

    if (password && !old_password) {
      throw new AppError('Old password is required.');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old passwords does not match');
      }

      user.password = await hash(password, 8);
    }

    if (!Object.values(Ethnicity).includes(ethnicity)) {
      throw new AppError('Ethnicity not valid.');
    }

    user.name = name;
    user.email = email;
    user.age = age;
    user.phone = phone;
    user.weight = weight;
    user.ethnicity = ethnicity;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateProfileService;

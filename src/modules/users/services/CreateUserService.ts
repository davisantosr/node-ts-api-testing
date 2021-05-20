import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/userRepository';

export enum Ethnicity {
  CAUCASIAN = 'caucasian',
  AFRO = 'afro',
  INDIGENOUS = 'indigenous',
  OTHER = 'other',
}

interface IRequest {
  name: string;
  phone: string;
  email: string;
  age: number;
  weight: number;
  ethnicity: Ethnicity;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    phone,
    email,
    age,
    weight,
    ethnicity,
    password,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email already used');
    }

    if (!Object.values(Ethnicity).includes(ethnicity)) {
      throw new AppError('Ethnicity not valid.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      phone,
      age,
      weight,
      ethnicity,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;

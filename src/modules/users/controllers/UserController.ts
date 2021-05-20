import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUsersService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';
import { classToClass } from 'class-transformer';
import RetrieveUserService from '../services/RetrieveUserService';
import CreateSessionsService from '../services/CreateSessionsService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(classToClass(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, age, ethnicity, phone, weight } =
      request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      age,
      ethnicity,
      phone,
      weight,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      name,
      phone,
      email,
      age,
      weight,
      ethnicity,
      password,
      old_password,
    } = request.body;

    const { id } = request.params;
    const user_id = Number(id);

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      user_id,
      name,
      email,
      password,
      old_password,
      weight,
      phone,
      ethnicity,
      age,
    });

    return response.json(classToClass(user));
  }

  public async retrieve(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const user_id = Number(id);

    const retrieveUser = new RetrieveUserService();

    const user = await retrieveUser.execute({
      user_id,
    });

    return response.json(classToClass(user));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = Number(id);

    const deleteUser = new DeleteUserService();

    const result = await deleteUser.execute({
      user_id,
    });

    return response.status(200).json('success');
  }

  public async createSession(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body;

    const createSession = new CreateSessionsService();

    const user = await createSession.execute({
      email,
      password,
    });

    return response.json(classToClass(user));
  }
}

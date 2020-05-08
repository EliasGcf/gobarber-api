import { uuid } from 'uuidv4';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICraeteUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async findAllProviders({
    execept_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    let { users } = this;

    if (execept_user_id) {
      users = this.users.filter(user => user.id !== execept_user_id);
    }

    return users;
  }

  public async create({
    name,
    email,
    password,
  }: ICraeteUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), name, email, password });

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;

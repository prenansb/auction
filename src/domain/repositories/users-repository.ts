import { User } from '../classes/user';

export abstract class UsersRepository {
  abstract getById(id: string): Promise<User | null>;
  abstract getByEmail(email: string): Promise<User | null>;
  abstract listUsers(): Promise<User[]>;
  abstract deleteUser(id: string): Promise<User>;
}

import { Injectable } from '@nestjs/common';
import { User } from '../../classes/user';
import { UsersRepository } from '../../repositories/users-repository';

export interface ListUsersUseCaseResponse {
  users: User[];
}

@Injectable()
export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<ListUsersUseCaseResponse> {
    const users = await this.usersRepository.listUsers();

    return { users };
  }
}

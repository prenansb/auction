import { Injectable } from '@nestjs/common';
import { User } from '../../classes/user';
import { UsersRepository } from '../../repositories/users-repository';
import { UserNotFoundError } from 'src/domain/errors/users/not-found';

interface DeleteUserUseCaseResponse {
  user: User;
}

@Injectable()
export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string): Promise<DeleteUserUseCaseResponse> {
    const user = await this.usersRepository.deleteUser(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    return { user };
  }
}

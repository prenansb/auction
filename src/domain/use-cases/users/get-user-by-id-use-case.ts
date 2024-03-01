import { Injectable } from '@nestjs/common';
import { User } from '../../classes/user';
import { UsersRepository } from '../../repositories/users-repository';
import { UserNotFoundError } from 'src/domain/errors/users/not-found';

interface GetUserByIdUseCaseResponse {
  user: User;
}

@Injectable()
export class GetUserByIdUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string): Promise<GetUserByIdUseCaseResponse> {
    const user = await this.usersRepository.getById(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    return { user };
  }
}

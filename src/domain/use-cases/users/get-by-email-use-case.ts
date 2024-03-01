import { Injectable } from '@nestjs/common';
import { User } from '../../classes/user';
import { UsersRepository } from '../../repositories/users-repository';
import { UserNotFoundError } from 'src/domain/errors/users/not-found';

interface GetUserByEmailUseCaseResponse {
  user: User;
}

@Injectable()
export class GetUserByEmailUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(email: string): Promise<GetUserByEmailUseCaseResponse> {
    const user = await this.usersRepository.getByEmail(email);

    if (!user) {
      throw new UserNotFoundError();
    }

    return { user };
  }
}

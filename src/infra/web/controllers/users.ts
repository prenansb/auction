import {
  Controller,
  Delete,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { DeleteUserUseCase } from 'src/domain/use-cases/users/delete-use-case';
import { GetUserByEmailUseCase } from 'src/domain/use-cases/users/get-by-email-use-case';
import { GetUserByIdUseCase } from 'src/domain/use-cases/users/get-user-by-id-use-case';
import { ListUsersUseCase } from 'src/domain/use-cases/users/list-use-case';

@Controller('/users')
export class UsersController {
  constructor(
    private listUsers: ListUsersUseCase,
    private getUser: GetUserByIdUseCase,
    private getUserByEmail: GetUserByEmailUseCase,
    private deleteUser: DeleteUserUseCase,
  ) {}

  @Get()
  async list() {
    return await this.listUsers.execute();
  }

  @Get('/get-by-id/:id')
  async getById(@Param('id') id: string) {
    const { user } = await this.getUser.execute(id);

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    return user;
  }

  @Get('/get-by-email/:email')
  async getByEmail(@Param('email') email: string) {
    const { user } = await this.getUserByEmail.execute(email);

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    return user;
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    const { user } = await this.deleteUser.execute(id);

    if (!user) {
      throw new NotFoundException('User Not found');
    }

    return user;
  }
}

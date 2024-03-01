import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/classes/user';
import { UsersRepository } from 'src/domain/repositories/users-repository';

import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async listUsers(): Promise<User[]> {
    const users = await this.prismaService.user.findMany({
      skip: 0,
      take: 10,
    });

    return users.map((userProps) => new User(userProps));
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    return new User(user);
  }

  async getById(id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    return new User(user);
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.getById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.prismaService.user.delete({
      where: { id },
    });

    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { AuthRepository } from 'src/domain/repositories/auth-repository';
import {
  SignUpUseCaseRequest,
  SignUpUseCaseResponse,
} from 'src/domain/use-cases/auth/signup';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { EncryptionService } from 'src/domain/services/encryption.service';
import { User } from 'src/domain/classes/user';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(
    private prisma: PrismaService,
    private encrypt: EncryptionService,
  ) {}

  async signUp(data: SignUpUseCaseRequest): Promise<SignUpUseCaseResponse> {
    const { email, name, password } = data;

    const encryptedPassword = await this.encrypt.hashPassword(password);

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password: encryptedPassword,
      },
    });

    return new User(user);
  }

  async login() {}
}

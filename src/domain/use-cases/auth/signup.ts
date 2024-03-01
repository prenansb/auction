import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/classes/user';
import { AuthRepository } from 'src/domain/repositories/auth-repository';

export interface SignUpUseCaseRequest {
  email: string;
  password: string;
  name: string;
}

export interface SignUpUseCaseResponse extends User {}

@Injectable()
export class SignUpUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(attrs: SignUpUseCaseRequest): Promise<SignUpUseCaseResponse> {
    const response = await this.authRepository.signUp(attrs);

    return response;
  }
}

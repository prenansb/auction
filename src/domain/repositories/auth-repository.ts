import {
  SignUpUseCaseRequest,
  SignUpUseCaseResponse,
} from 'src/domain/use-cases/auth/signup';

export abstract class AuthRepository {
  abstract login();
  abstract signUp(data: SignUpUseCaseRequest): Promise<SignUpUseCaseResponse>;
}

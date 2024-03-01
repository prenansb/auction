import { DomainError } from '../domain-error';

export class UserAlreadyExistsError extends DomainError {
  constructor() {
    super('User already exists!', 409);
  }
}

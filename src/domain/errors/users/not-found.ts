import { DomainError } from '../domain-error';

export class UserNotFoundError extends DomainError {
  constructor() {
    super('User not found!', 404);
  }
}

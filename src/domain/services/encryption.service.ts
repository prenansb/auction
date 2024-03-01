import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {
  private saltRounds = 12;

  async hashPassword(password: string): Promise<string> {
    const hashPassword = await bcrypt.hash(password, this.saltRounds);

    return hashPassword;
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }
}

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/domain/repositories/users-repository';
import { User } from 'src/domain/classes/user';

interface LoginBody {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(body: LoginBody): Promise<any> {
    const user = await this.usersRepository.getByEmail(body.email);
    if (user && (await bcrypt.compare(body.password, user.props.password))) {
      const { props } = user;
      return props;
    }
    return null;
  }

  async login(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = {
      username: user.props.email,
      sub: {
        name: user.props.name,
      },
    };

    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refreshToken(user: User) {
    const payload = {
      username: user.props.email,
      sub: {
        name: user.props.name,
      },
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/domain/guards/local-auth.guard';
import { RefreshJwtGuard } from 'src/domain/guards/refresh-jwt-auth.guard';
import { AuthRepository } from 'src/domain/repositories/auth-repository';
import { AuthService } from 'src/domain/services/auth.service';
import { SignUpBody } from 'src/infra/web/dto/signup-body';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private authRepository: AuthRepository,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async registerUser(@Body() createUserDto: SignUpBody) {
    return await this.authRepository.signUp(createUserDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}

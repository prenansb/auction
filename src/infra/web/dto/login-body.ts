import { OmitType } from '@nestjs/swagger';
import { SignUpBody } from './signup-body';

export class LoginBody extends OmitType(SignUpBody, ['name']) {}

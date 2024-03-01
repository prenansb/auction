import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignUpBody {
  @IsNotEmpty()
  @Length(2, 40)
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(5, 40)
  email!: string;

  @IsNotEmpty()
  @Length(8, 20)
  password!: string;
}

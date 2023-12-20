import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBidBody {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  itemId: number;
}

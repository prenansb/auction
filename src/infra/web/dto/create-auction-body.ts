import { IsNotEmpty, IsNumber, Length, ValidateNested } from 'class-validator';

export class Item {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  startPrice: string;
}

export class CreateAuctionBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @ValidateNested()
  item: Item;
}

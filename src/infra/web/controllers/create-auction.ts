import { Body, Controller, Post } from '@nestjs/common';
import { CreateNewAuctionUseCase } from 'src/domain/use-cases/create-new-auction-use-case';
import { CreateAuctionBody } from 'src/infra/web/dto/create-auction-body';

@Controller('/auction')
export class CreateAuctionController {
  constructor(private create: CreateNewAuctionUseCase) {}

  @Post('/create-new-auction')
  async createAuction(@Body() body: CreateAuctionBody) {
    const { name, item } = body;
    await this.create.execute({ name, item });
  }
}

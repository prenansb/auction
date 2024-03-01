import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { CreateBidUseCase } from 'src/domain/use-cases/bid/create-bid-use-case';
import { CreateBidBody } from 'src/infra/web/dto/create-bid-body';

@Injectable()
@Controller('/bid')
export class BidController {
  constructor(private create: CreateBidUseCase) {}

  @Post('/create')
  async createBid(@Body() body: CreateBidBody) {
    const { amount, itemId } = body;
    await this.create.execute({ amount, itemId });
  }

  // @Get('/:id')
  // async getBids(@Param('id') id: string): Promise<any> {
  //   await this.getBids.execute()
  // }
}

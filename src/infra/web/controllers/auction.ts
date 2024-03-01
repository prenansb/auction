import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/domain/guards/jwt-auth.guard';
import { CreateNewAuctionUseCase } from 'src/domain/use-cases/auction/create-new-auction-use-case';
import { GetAuctionsUseCase } from 'src/domain/use-cases/auction/get-all-auctions-use-case';
import { GetAuctionByIdUseCase } from 'src/domain/use-cases/auction/get-auction-by-id';
import { CreateAuctionBody } from 'src/infra/web/dto/create-auction-body';

@Controller('/auction')
export class AuctionController {
  constructor(
    private create: CreateNewAuctionUseCase,
    private list: GetAuctionsUseCase,
    private getAuction: GetAuctionByIdUseCase,
  ) {}

  @UseGuards(JwtGuard)
  @Get('/list')
  async getAuctions() {
    return await this.list.execute();
  }

  @UseGuards(JwtGuard)
  @Post('/create')
  async createAuction(@Body() body: CreateAuctionBody) {
    const { name } = await this.create.execute(body);

    return name;
  }

  @UseGuards(JwtGuard)
  @Get('/:id')
  async getAuctionById(@Param('id') id: string) {
    const auction = await this.getAuction.execute(id);

    return { auction };
  }
}

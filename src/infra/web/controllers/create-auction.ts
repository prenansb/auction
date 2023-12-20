import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateAuctionBody } from 'src/infra/web/dto/create-auction-body';

@Controller('/auction')
export class CreateAuctionController {
  constructor(private prisma: PrismaService) {}

  @Post('/create-new-auction')
  async createAuction(@Body() body: CreateAuctionBody) {
    const endDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
    const { name, item } = body;

    await this.prisma.auction.create({
      data: {
        name,
        startDate: new Date(),
        endDate,
        item: {
          create: {
            name: item.name,
            description: item.description,
            startPrice: Number.parseFloat(item.startPrice),
          },
        },
      },
    });
  }
}

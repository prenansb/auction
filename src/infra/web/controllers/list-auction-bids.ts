import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Controller()
export class ListAuctionBidsController {
  constructor(private prisma: PrismaService) {}

  @Post('/bids-list')
  async listBids(@Body() body) {
    const { itemId } = body;

    const bids = await this.prisma.bid.findMany({
      where: {
        itemId,
      },
    });

    return { bids };
  }
}

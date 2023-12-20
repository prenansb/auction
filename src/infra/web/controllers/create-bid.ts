import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateBidBody } from 'src/infra/web/dto/create-bid-body';

@Controller('/bid')
export class CreateBidController {
  constructor(private prisma: PrismaService) {}

  @Post('/create-bid')
  async createBid(@Body() body: CreateBidBody) {
    const { amount, itemId } = body;

    const isItemExpired = await this.prisma.auction.findUnique({
      where: { id: itemId },
    });

    if (isItemExpired.endDate < new Date()) {
      return {
        error:
          'You can no longer make bids for this auction. The auction has ended.',
      };
    }

    await this.prisma.bid.create({
      data: {
        amount,
        timestamp: new Date(),
        itemId,
      },
    });
  }
}

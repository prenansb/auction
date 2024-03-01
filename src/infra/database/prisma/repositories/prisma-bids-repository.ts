import { Injectable } from '@nestjs/common';
import { BidsRepository } from 'src/domain/repositories/bids-repository';
import { CreateBidDTO } from 'src/domain/use-cases/bid/create-bid-use-case';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class PrismaBidsRepository implements BidsRepository {
  constructor(private prisma: PrismaService) {}

  async createBid(bid: CreateBidDTO): Promise<any> {
    const { amount, itemId } = bid;

    const item = await this.prisma.auction.findUnique({
      where: { id: itemId },
    });

    if (item.endDate < new Date()) {
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

    return `bid ${amount} on ${item.name}`;
  }

  async listBids(id) {
    const bids = await this.prisma.bid.findMany({
      where: {
        itemId: Number.parseInt(id, 10),
      },
    });

    return bids;
  }
}

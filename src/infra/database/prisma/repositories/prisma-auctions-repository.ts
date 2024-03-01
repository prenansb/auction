import { Injectable } from '@nestjs/common';
import { Auction } from 'src/domain/classes/auction';
import { AuctionsRepository } from 'src/domain/repositories/auctions-repository';
import { CreateAuctionUseCaseRequest } from 'src/domain/use-cases/auction/create-new-auction-use-case';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class PrismaAuctionsRepository implements AuctionsRepository {
  constructor(private prisma: PrismaService) {}

  async getAuctions(): Promise<Auction[]> {
    const auctions = await this.prisma.auction.findMany({});

    return auctions.map((auctionProps) => new Auction(auctionProps));
  }

  async getAuctionById(id: string): Promise<Auction> {
    const auction = await this.prisma.auction.findUnique({
      where: {
        id,
      },
    });

    return new Auction(auction);
  }

  async createAuction(auction: CreateAuctionUseCaseRequest): Promise<string> {
    const { name, item } = auction;
    const endDate = new Date(new Date().getTime() + 5 * 24 * 60 * 30);
    // 5 days = 5 * 24 * 60 * 60 * 1000

    const { name: auctionName } = await this.prisma.auction.create({
      data: {
        name,
        startDate: new Date(),
        endDate,
        item: {
          create: {
            name: item.name,
            description: item.description,
            startPrice: item.startPrice,
          },
        },
      },
    });

    console.log(auctionName);
    return auctionName;
  }
}

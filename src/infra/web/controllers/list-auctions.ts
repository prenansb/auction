import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Controller()
export class ListAuctionsController {
  constructor(private prisma: PrismaService) {}

  @Get('/auctions')
  async listAuctions() {
    const auctions = await this.prisma.auction.findMany();

    return { auctions };
  }
}

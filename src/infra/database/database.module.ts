import { Global, Module } from '@nestjs/common';
import { AuctionsRepository } from 'src/domain/repositories/auctions-repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaAuctionsRepository } from 'src/infra/database/prisma/repositories/prisma-auctions-repository';

@Global()
@Module({
  exports: [AuctionsRepository],
  providers: [
    PrismaService,
    {
      provide: AuctionsRepository,
      useClass: PrismaAuctionsRepository,
    },
  ],
})
export class DatabaseModule {}

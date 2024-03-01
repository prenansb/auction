import { Global, Module } from '@nestjs/common';
import { AuctionsRepository } from 'src/domain/repositories/auctions-repository';
import { BidsRepository } from 'src/domain/repositories/bids-repository';
import { UsersRepository } from 'src/domain/repositories/users-repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaAuctionsRepository } from 'src/infra/database/prisma/repositories/prisma-auctions-repository';
import { PrismaBidsRepository } from 'src/infra/database/prisma/repositories/prisma-bids-repository';
import { PrismaUsersRepository } from 'src/infra/database/prisma/repositories/prisma-users-repository';

@Global()
@Module({
  exports: [AuctionsRepository, BidsRepository, UsersRepository],
  providers: [
    PrismaService,
    {
      provide: AuctionsRepository,
      useClass: PrismaAuctionsRepository,
    },
    {
      provide: BidsRepository,
      useClass: PrismaBidsRepository,
    },
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AuctionController } from './infra/web/controllers/auction';
import { BidController } from 'src/infra/web/controllers/bid';
import { DomainModule } from 'src/domain/domain.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthController } from 'src/infra/web/controllers/auth';
import { UsersController } from 'src/infra/web/controllers/users';

@Module({
  imports: [DomainModule, DatabaseModule],
  controllers: [
    AuctionController,
    BidController,
    AuthController,
    UsersController,
  ],
  providers: [],
})
export class AppModule {}

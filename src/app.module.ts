import { Module } from '@nestjs/common';
import { CreateAuctionController } from './infra/web/controllers/create-auction';
import { CreateBidController } from 'src/infra/web/controllers/create-bid';
import { ListAuctionsController } from 'src/infra/web/controllers/list-auctions';
import { ListAuctionBidsController } from 'src/infra/web/controllers/list-auction-bids';
import { DomainModule } from 'src/domain/domain.module';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DomainModule, DatabaseModule],
  controllers: [
    CreateAuctionController,
    CreateBidController,
    ListAuctionsController,
    ListAuctionBidsController,
  ],
  providers: [],
})
export class AppModule {}

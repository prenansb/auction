import { Module } from '@nestjs/common';
import { CreateNewAuctionUseCase } from 'src/domain/use-cases/create-new-auction-use-case';

@Module({
  exports: [CreateNewAuctionUseCase],
  providers: [CreateNewAuctionUseCase],
})
export class DomainModule {}

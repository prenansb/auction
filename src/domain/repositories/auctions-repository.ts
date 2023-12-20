import { CreateAuctionUseCaseRequest } from 'src/domain/use-cases/create-new-auction-use-case';

export abstract class AuctionsRepository {
  abstract createAuction(auction: CreateAuctionUseCaseRequest): Promise<string>;
}

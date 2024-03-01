import { Auction } from 'src/domain/classes/auction';
import { CreateAuctionUseCaseRequest } from 'src/domain/use-cases/auction/create-new-auction-use-case';

export abstract class AuctionsRepository {
  abstract createAuction(auction: CreateAuctionUseCaseRequest): Promise<string>;
  abstract getAuctions(): Promise<Auction[]>;
  abstract getAuctionById(id: string);
}

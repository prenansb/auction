import { CreateBidDTO } from 'src/domain/use-cases/bid/create-bid-use-case';

export abstract class BidsRepository {
  abstract createBid(bid: CreateBidDTO): Promise<string>;
}

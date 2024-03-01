import { Injectable } from '@nestjs/common';
import { Auction } from 'src/domain/classes/auction';
import { AuctionsRepository } from 'src/domain/repositories/auctions-repository';

export interface GetAuctionByIdUseCaseResponse {
  auction: Auction;
}

@Injectable()
export class GetAuctionByIdUseCase {
  constructor(private auctionsRepository: AuctionsRepository) {}

  async execute(id: string): Promise<GetAuctionByIdUseCaseResponse> {
    const auction = await this.auctionsRepository.getAuctionById(id);

    return { auction };
  }
}

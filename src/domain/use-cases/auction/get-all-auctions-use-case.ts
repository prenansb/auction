import { Injectable } from '@nestjs/common';
import { Auction } from 'src/domain/classes/auction';
import { AuctionsRepository } from 'src/domain/repositories/auctions-repository';

// TODO: Try to figure out why it gets an error when the export is removed
export interface GetAuctionsUseCaseResponse {
  auctions: Auction[];
}

@Injectable()
export class GetAuctionsUseCase {
  constructor(private auctionsRepository: AuctionsRepository) {}

  async execute(): Promise<GetAuctionsUseCaseResponse> {
    const auctions = await this.auctionsRepository.getAuctions();

    return { auctions };
  }
}

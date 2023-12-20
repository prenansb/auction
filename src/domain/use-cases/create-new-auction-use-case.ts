import { Injectable } from '@nestjs/common';
import { AuctionsRepository } from 'src/domain/repositories/auctions-repository';

interface Item {
  name: string;
  description: string;
  startPrice: number;
}

export interface CreateAuctionUseCaseRequest {
  name: string;
  item: Item;
}

interface CreateAuctionUseCaseResponse {
  name: string;
}

@Injectable
export class CreateNewAuctionUseCase {
  constructor(private auctionsRepository: AuctionsRepository) {}

  async execute(
    attrs: CreateAuctionUseCaseRequest,
  ): Promise<CreateAuctionUseCaseResponse> {
    const name = await this.auctionsRepository.createAuction(attrs);

    return { name };
  }
}

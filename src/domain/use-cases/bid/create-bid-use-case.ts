import { Injectable } from '@nestjs/common';
import { BidsRepository } from 'src/domain/repositories/bids-repository';

export interface CreateBidDTO {
  amount: number;
  itemId: number;
}

interface CreateAuctionResponse {
  msg: string;
}

@Injectable()
export class CreateBidUseCase {
  constructor(private bidsRepository: BidsRepository) {}

  async execute(attrs: CreateBidDTO): Promise<CreateAuctionResponse> {
    const msg = await this.bidsRepository.createBid(attrs);
    return { msg };
  }
}

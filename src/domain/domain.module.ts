import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CreateNewAuctionUseCase } from 'src/domain/use-cases/auction/create-new-auction-use-case';
import { GetAuctionsUseCase } from 'src/domain/use-cases/auction/get-all-auctions-use-case';
import { GetAuctionByIdUseCase } from 'src/domain/use-cases/auction/get-auction-by-id';
import { CreateBidUseCase } from 'src/domain/use-cases/bid/create-bid-use-case';
import { DeleteUserUseCase } from 'src/domain/use-cases/users/delete-use-case';
import { GetUserByEmailUseCase } from 'src/domain/use-cases/users/get-by-email-use-case';
import { GetUserByIdUseCase } from 'src/domain/use-cases/users/get-user-by-id-use-case';
import { ListUsersUseCase } from 'src/domain/use-cases/users/list-use-case';

@Module({
  exports: [
    // Auctions
    CreateNewAuctionUseCase,
    GetAuctionsUseCase,
    GetAuctionByIdUseCase,
    // Bids
    CreateBidUseCase,
    // Auth
    // Users
    ListUsersUseCase,
    GetUserByEmailUseCase,
    GetUserByIdUseCase,
    DeleteUserUseCase,
  ],
  providers: [
    // Auctions
    CreateNewAuctionUseCase,
    GetAuctionsUseCase,
    GetAuctionByIdUseCase,
    // Bids
    CreateBidUseCase,
    // Auth
    // Users
    ListUsersUseCase,
    GetUserByEmailUseCase,
    GetUserByIdUseCase,
    DeleteUserUseCase,
  ],
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class DomainModule {}

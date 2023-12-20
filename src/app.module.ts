import { Module } from '@nestjs/common';
import { CreateAuctionController } from './infra/web/controllers/create-auction';
import { PrismaService } from 'src/infra/database/prisma.service';

@Module({
  imports: [],
  controllers: [CreateAuctionController],
  providers: [PrismaService],
})
export class AppModule {}

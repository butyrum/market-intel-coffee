import { Module } from '@nestjs/common';
import { MarketResearchService } from './market-research.service';
import { MarketResearchController } from './market-research.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MarketResearchController],
  providers: [MarketResearchService, PrismaService],
})
export class MarketResearchModule {}

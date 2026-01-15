import { Module } from '@nestjs/common';
import { MarketResearchService } from './market-research.service';
import { MarketResearchController } from './market-research.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ScrapingService } from './scraping.service';
import { LlmService } from './llm.service';

@Module({
  controllers: [MarketResearchController],
  providers: [
    MarketResearchService,
    PrismaService,
    ScrapingService,
    LlmService,
  ],
})
export class MarketResearchModule {}

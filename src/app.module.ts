import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MarketResearchModule } from './market-research/market-research.module';

@Module({
  imports: [PrismaModule, MarketResearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

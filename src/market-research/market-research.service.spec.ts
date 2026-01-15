import { Test, TestingModule } from '@nestjs/testing';
import { MarketResearchService } from './market-research.service';

describe('MarketResearchService', () => {
  let service: MarketResearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketResearchService],
    }).compile();

    service = module.get<MarketResearchService>(MarketResearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

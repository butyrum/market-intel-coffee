import { Test, TestingModule } from '@nestjs/testing';
import { MarketResearchController } from './market-research.controller';

describe('MarketResearchController', () => {
  let controller: MarketResearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketResearchController],
    }).compile();

    controller = module.get<MarketResearchController>(MarketResearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarketResearchService } from './market-research.service';

@Controller('market')
export class MarketResearchController {
  constructor(private readonly service: MarketResearchService) {}

  @Post('concorrente')
  async adicionarConcorrente(@Body() data: any) {
    return this.service.salvarConcorrente(data);
  }

  @Post('meu-item')
  async adicionarMeuItem(@Body() data: any) {
    return this.service.salvarMeuItem(data);
  }

  @Get('dashboard')
  async getDashboard() {
    return this.service.gerarDashboard();
  }
}

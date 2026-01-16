import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ItemDto {
  nome: string;
  preco: number | string;
}

export interface ConcorrenteDto {
  nome: string;
  cidade: string;
  itens: ItemDto[];
}

export interface MeuItemDto {
  nome: string;
  preco: number | string;
  categoria?: string;
}

export interface GapDto {
  nome: string;
  mediaPreco: number;
  presenteEm: number;
  total: number;
}
// -----------------------------------------------------------

@Injectable()
export class MarketResearchService {
  constructor(private prisma: PrismaService) {}

  async salvarConcorrente(data: ConcorrenteDto) {
    return this.prisma.competidor.create({
      data: {
        nome: data.nome,
        cidade: data.cidade,
        itens: {
          create: data.itens.map((item) => ({
            nome: item.nome,
            preco: Number(item.preco),
          })),
        },
      },
    });
  }

  async salvarMeuItem(data: MeuItemDto) {
    return this.prisma.meuCardapio.create({
      data: {
        nome: data.nome,
        preco: Number(data.preco),
        categoria: data.categoria || 'Geral',
      },
    });
  }

  async gerarDashboard() {
    const meusItens = await this.prisma.meuCardapio.findMany();
    const concorrentes = await this.prisma.competidor.findMany({
      include: { itens: true },
    });

    const totalConcorrentes = concorrentes.length;

    const todosItensMercado = concorrentes.flatMap((c) => c.itens);
    const mercadoStats: Record<
      string,
      { soma: number; qtd: number; precos: number[] }
    > = {};

    todosItensMercado.forEach((item) => {
      const nomeChave = item.nome.toLowerCase().trim();

      if (!mercadoStats[nomeChave]) {
        mercadoStats[nomeChave] = { soma: 0, qtd: 0, precos: [] };
      }
      const precoNum = Number(item.preco);
      mercadoStats[nomeChave].soma += precoNum;
      mercadoStats[nomeChave].qtd += 1;
      mercadoStats[nomeChave].precos.push(precoNum);
    });
    let itensEmComumCount = 0;

    const comparativo = meusItens.map((meuItem) => {
      const nomeBusca = meuItem.nome.toLowerCase().trim();
      const dadosMercado = mercadoStats[nomeBusca];
      const meuPrecoNum = Number(meuItem.preco);

      if (dadosMercado) {
        itensEmComumCount++;

        const mediaMercado = dadosMercado.soma / dadosMercado.qtd;
        const diferenca = meuPrecoNum - mediaMercado;

        let status = 'NA MÉDIA';
        if (diferenca < -0.5) status = 'ESTRATÉGIA: PREÇO BAIXO 🟢';
        if (diferenca > 0.5) status = 'ATENÇÃO: PREÇO ALTO 🔴';

        return {
          item: meuItem.nome,
          meuPreco: meuPrecoNum,
          mediaMercado: parseFloat(mediaMercado.toFixed(2)),
          status: status,
          popularidade: dadosMercado.qtd,
          totalConcorrentes: totalConcorrentes,
        };
      } else {
        return {
          item: meuItem.nome,
          meuPreco: meuPrecoNum,
          mediaMercado: 0,
          status: 'ITEM EXCLUSIVO ⭐',
          popularidade: 0,
          totalConcorrentes: totalConcorrentes,
        };
      }
    });

    const oportunidades: GapDto[] = [];
    const meusNomes = meusItens.map((i) => i.nome.toLowerCase().trim());

    for (const [nome, stats] of Object.entries(mercadoStats)) {
      if (!meusNomes.includes(nome)) {
        if (
          stats.qtd >= 2 ||
          (totalConcorrentes > 0 && stats.qtd >= totalConcorrentes / 2)
        ) {
          const media = stats.soma / stats.qtd;
          oportunidades.push({
            nome: nome.charAt(0).toUpperCase() + nome.slice(1),
            mediaPreco: parseFloat(media.toFixed(2)),
            presenteEm: stats.qtd,
            total: totalConcorrentes,
          });
        }
      }
    }

    oportunidades.sort((a, b) => b.presenteEm - a.presenteEm);

    return {
      totalConcorrentes,
      itensEmComum: itensEmComumCount,
      resumo: comparativo,
      oportunidades: oportunidades,
    };
  }
}

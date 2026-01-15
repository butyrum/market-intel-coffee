import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('☕ Adicionando Academia do Café (Savassi)...');

  // 1. Limpeza Segura
  const existe = await prisma.competidor.findFirst({
    where: { nome: 'Academia do Café' },
  });
  if (existe) {
    await prisma.competidor.update({
      where: { id: existe.id },
      data: { itens: { deleteMany: {} } },
    });
    await prisma.competidor.delete({ where: { id: existe.id } });
  }

  // 2. Cadastro com Mapeamento Estratégico
  await prisma.competidor.create({
    data: {
      nome: 'Academia do Café',
      cidade: 'Belo Horizonte', // Savassi
      itens: {
        create: [
          // ===========================================
          // ⚔️ BATALHA DE PREÇOS (Comparáveis)
          // ===========================================

          // CAFÉS
          { nome: 'Espresso Longo', preco: 8.0 }, // O "Espresso Duplo" deles (R$ 8,00)
          { nome: 'Espresso Curto', preco: 7.5 }, // O "Espresso Simples" deles (R$ 7,50)
          { nome: 'Latte', preco: 15.5 }, // R$ 15,50 vs Seu R$ 10,00 (Vitória grande!)
          { nome: 'Cappuccino', preco: 11.0 }, // O "Simples" deles (R$ 11,00) vs Seu (R$ 14,00)

          // SALGADOS & LANCHES
          { nome: 'Quiches', preco: 18.0 }, // R$ 18,00 vs Seu R$ 15,00
          { nome: 'Tapioca Frango', preco: 15.5 }, // A "Tortinha sem Glúten" deles (Mapeamento solicitado)
          { nome: 'Queijo Quente', preco: 24.0 }, // R$ 24,00 vs Seu R$ 20,00 (Dourado)

          // PADARIA & CROISSANTS
          { nome: 'Croissant', preco: 18.0 }, // O "Tradicional" (Empate técnico no preço)
          { nome: 'Croissant 4 Queijos', preco: 24.0 }, // O "Recheado com Queijo" deles

          // DOCES
          { nome: 'Brownie', preco: 9.0 }, // R$ 9,00 vs Seu R$ 11,00

          // ===========================================
          // ⚠️ GAPS & EXCLUSIVOS (Você não tem ou é diferente)
          // ===========================================

          // CAFÉS
          { nome: 'Americano', preco: 10.0 }, // GAP
          { nome: 'Cappuccino Doce de Leite', preco: 20.0 }, // GAP (Mocha Doce de Leite)
          { nome: 'Flat White', preco: 10.5 }, // GAP (Você indicou que não tem mais)

          // COMIDAS
          { nome: 'Bolo do Dia', preco: 11.0 }, // GAP
          { nome: 'Pão de Queijo (Unidade)', preco: 7.0 }, // GAP (Nome diferente para não comparar com sua porção)
          { nome: 'Cinnamon Roll', preco: 10.0 }, // GAP

          // OUTROS QUE APARECEM NO CARDÁPIO DELES
          { nome: 'Cookie', preco: 12.0 }, // (Caramelo Salgado/Chocolate)
          { nome: 'Pão na Chapa', preco: 14.0 }, // (Fermentação natural)
        ],
      },
    },
  });

  console.log('✅ Academia do Café adicionada com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

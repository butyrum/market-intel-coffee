import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🇬🇧 Adicionando London Coffee Station (Vila Mariana)...');

  // 1. Limpeza Segura (Remove apenas o London Coffee se já existir)
  const existe = await prisma.competidor.findFirst({
    where: { nome: 'London Coffee Station' },
  });
  if (existe) {
    await prisma.competidor.update({
      where: { id: existe.id },
      data: { itens: { deleteMany: {} } },
    });
    await prisma.competidor.delete({ where: { id: existe.id } });
  }

  // 2. Cadastro Estratégico
  await prisma.competidor.create({
    data: {
      nome: 'London Coffee Station',
      cidade: 'São Paulo', // Vila Mariana
      itens: {
        create: [
          // ===========================================
          // ⚔️ BATALHA DE PREÇOS (Nomes da Gudy)
          // ===========================================

          // SALGADOS (Mapeamento que você definiu)
          { nome: 'Queijo Quente', preco: 26.9 }, // O "Grilled Cheese" deles
          { nome: 'Croque Madame', preco: 49.9 }, // O "Croque Monsieur" deles
          { nome: 'Croissant', preco: 27.9 }, // O "Tradicional" deles (Seu é R$ 18)

          // BEBIDAS
          { nome: 'Latte', preco: 18.99 }, // O "Latte" deles (Seu é R$ 10)
          { nome: 'Cappuccino', preco: 17.0 }, // Estimado (Cappuccino Italiano)
          { nome: 'Chocolate Quente', preco: 18.0 }, // Estimado
          { nome: 'Mocha', preco: 20.0 }, // O "Mocaccino" deles

          // DOCES
          { nome: 'Brownie', preco: 16.0 }, // Estimado
          { nome: 'Cookie Recheado', preco: 15.0 }, // Estimado (Para comparar com o seu)

          // ===========================================
          // ⚠️ GAPS & EXCLUSIVOS DELES (Diferenciais)
          // ===========================================

          // A GRANDE FORÇA DELES: BOLOS (Você não tem igual)
          { nome: 'Bolo Red Velvet', preco: 26.9 }, // Fatia
          { nome: 'Bolo de Fubá com Goiabada', preco: 21.9 },
          { nome: 'Bolo de Cenoura', preco: 22.9 }, // GAP Importante!

          // SALGADOS DIFERENCIADOS
          { nome: 'Croissant Queijo Branco', preco: 37.9 },
          { nome: 'Waffle Salgado', preco: 38.0 }, // Nome diferente para NÃO comparar com o seu doce

          // BEBIDAS GAP
          { nome: 'Espresso Americano', preco: 10.0 }, // Você não tem
        ],
      },
    },
  });

  console.log('✅ London Coffee Station adicionado! (Foco em Bolos)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🏘️ Adicionando Belo Café (Savassi) - Correção Bebidas...');

  const existe = await prisma.competidor.findFirst({
    where: { nome: 'Belo Café' },
  });
  if (existe) {
    await prisma.competidor.update({
      where: { id: existe.id },
      data: { itens: { deleteMany: {} } },
    });
    await prisma.competidor.delete({ where: { id: existe.id } });
  }

  await prisma.competidor.create({
    data: {
      nome: 'Belo Café',
      cidade: 'Belo Horizonte',
      itens: {
        create: [
          { nome: 'Croissant', preco: 18.0 },
          { nome: 'Croissant com Nutella', preco: 32.0 },
          { nome: 'Croissant Carne Bovina', preco: 34.0 },
          { nome: 'Croissant Frango', preco: 29.0 },

          { nome: 'Pão de Queijo Recheado', preco: 22.0 },

          { nome: 'Toast Caprese', preco: 32.0 },
          { nome: 'Toast Carne Agridoce', preco: 36.0 },
          { nome: 'Croque Madame', preco: 38.0 },
          { nome: 'Toast com Ovos', preco: 28.0 },

          { nome: 'Chocolate Quente', preco: 18.0 },
          { nome: 'Cappuccino', preco: 16.0 },
          { nome: 'Latte', preco: 16.0 },
          { nome: 'Soda Italiana', preco: 16.0 },

          { nome: 'Ciabatta Frango', preco: 29.0 },
          { nome: 'Ciabatta Vegana', preco: 30.0 },
          { nome: 'Toast Ovos com Bacon', preco: 32.0 },
          { nome: 'Mama Mia Toast', preco: 35.0 },
          { nome: 'Bolo do Dia', preco: 16.0 },
        ],
      },
    },
  });

  console.log('✅ Belo Café atualizado com todas as bebidas!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

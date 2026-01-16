import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(
    '☕ Adicionando Cupping Café (Comparação Rigorosa de Ingredientes)...',
  );

  const existe = await prisma.competidor.findFirst({
    where: { nome: 'Cupping Café' },
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
      nome: 'Cupping Café',
      cidade: 'Top 1 Brasil',
      itens: {
        create: [
          { nome: 'Queijo Quente', preco: 30.0 },
          { nome: 'Toast Avocado', preco: 30.0 },
          { nome: 'Pão de Queijo', preco: 10.0 },

          { nome: 'Espresso Curto', preco: 10.0 },
          { nome: 'Cappuccino', preco: 16.0 },
          { nome: 'Latte', preco: 16.0 },
          { nome: 'Flat White', preco: 17.0 },
          { nome: 'Mocha', preco: 18.0 },
          { nome: 'Chocolate Quente', preco: 16.0 },
          { nome: 'Chai Latte', preco: 20.0 },
          { nome: 'Matcha Latte', preco: 16.0 },
          { nome: 'Affogato', preco: 18.0 },
          { nome: 'Soda Italiana', preco: 17.0 },
          { nome: 'Frapês', preco: 23.0 },

          { nome: 'Cookie Recheado', preco: 14.0 },
          { nome: 'Brownie', preco: 16.0 },

          { nome: 'Tostada Delipesto', preco: 34.0 },
          { nome: 'Torrada Egg Lovers', preco: 30.0 },
          { nome: 'Bagel & Lox', preco: 49.0 },
          { nome: 'Bagel Eggs', preco: 28.0 },
          { nome: 'Bagel Homus', preco: 38.0 },
          { nome: 'Sanduíche Sourdough', preco: 34.0 },
          { nome: 'Panini', preco: 17.0 },
          { nome: 'Baguettine', preco: 16.0 },

          { nome: 'Croissant Simples', preco: 17.0 },
          { nome: 'Pain au Chocolat', preco: 13.0 },
          { nome: 'Muffin', preco: 17.0 },
          { nome: 'Banana Bread', preco: 14.0 },
          { nome: 'Pudim', preco: 15.0 },
          { nome: 'Cookie Gateau', preco: 24.0 },

          { nome: 'Espresso Tônica', preco: 17.0 },
          { nome: 'Cold Brew', preco: 14.0 },
          { nome: 'London Fog', preco: 16.0 },
          { nome: 'Vitamina de Frutas', preco: 20.0 },
          { nome: 'Café Coado', preco: 14.0 },
        ],
      },
    },
  });

  console.log('✅ Cupping Café (Corrigida) adicionada com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

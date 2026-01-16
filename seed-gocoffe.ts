import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🥤 Adicionando Go Coffee (Cardápio Completo & Detalhado)...');

  const existe = await prisma.competidor.findFirst({
    where: { nome: 'Go Coffee' },
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
      nome: 'Go Coffee',
      cidade: 'Belo Horizonte',
      itens: {
        create: [
          { nome: 'Misto Quente', preco: 18.0 },
          { nome: 'Pão de Queijo', preco: 9.5 },
          { nome: 'Croissant', preco: 15.0 },
          { nome: 'Croissant Recheado', preco: 21.0 },
          { nome: 'Waffle', preco: 24.0 },
          { nome: 'Cookie Recheado', preco: 14.0 },
          { nome: 'Brownie', preco: 16.0 },

          { nome: 'Espresso Curto', preco: 9.0 },
          { nome: 'Cappuccino', preco: 17.0 },
          { nome: 'Latte', preco: 17.0 },
          { nome: 'Mocha', preco: 20.0 },
          { nome: 'Chocolate Quente', preco: 19.0 },
          { nome: 'Caramel Macchiato', preco: 21.0 },
          { nome: 'Chai Latte', preco: 22.0 },
          { nome: 'Matcha Latte', preco: 20.0 },

          { nome: 'Frapês', preco: 26.0 },
          { nome: 'Soda Italiana', preco: 18.0 },
          { nome: 'Iced Caramel', preco: 22.0 },

          { nome: 'Pão de Batata', preco: 14.0 },
          { nome: 'Empada', preco: 12.0 },
          { nome: 'Quiche Lorraine', preco: 18.0 },
          { nome: 'Wrap de Frango', preco: 22.0 },

          { nome: 'Donut', preco: 16.0 },
          { nome: 'Muffin', preco: 18.0 },
          { nome: 'Bolo Caseiro', preco: 12.0 },

          { nome: 'Espresso Tônica', preco: 20.0 },
          { nome: 'Cold Brew', preco: 16.0 },
          { nome: 'Frappé de Paçoca', preco: 28.0 },
          { nome: 'Frappé de Nutella', preco: 30.0 },
        ],
      },
    },
  });

  console.log('✅ Go Coffee Completa Adicionada! Atualize o Dashboard.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

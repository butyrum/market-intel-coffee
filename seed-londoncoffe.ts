import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🇬🇧 Adicionando London Coffee Station (Vila Mariana)...');

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

  await prisma.competidor.create({
    data: {
      nome: 'London Coffee Station',
      cidade: 'São Paulo',
      itens: {
        create: [
          { nome: 'Queijo Quente', preco: 26.9 },
          { nome: 'Croque Madame', preco: 49.9 },
          { nome: 'Croissant', preco: 27.9 },

          { nome: 'Latte', preco: 18.99 },
          { nome: 'Cappuccino', preco: 17.0 },
          { nome: 'Chocolate Quente', preco: 18.0 },
          { nome: 'Mocha', preco: 20.0 },

          { nome: 'Brownie', preco: 16.0 },
          { nome: 'Cookie Recheado', preco: 15.0 },

          { nome: 'Bolo Red Velvet', preco: 26.9 },
          { nome: 'Bolo de Fubá com Goiabada', preco: 21.9 },
          { nome: 'Bolo de Cenoura', preco: 22.9 },

          { nome: 'Croissant Queijo Branco', preco: 37.9 },
          { nome: 'Waffle Salgado', preco: 38.0 }, //

          { nome: 'Espresso Americano', preco: 10.0 },
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

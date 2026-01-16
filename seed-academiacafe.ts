import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('☕ Adicionando Academia do Café (Savassi)...');

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

  await prisma.competidor.create({
    data: {
      nome: 'Academia do Café',
      cidade: 'Belo Horizonte',
      itens: {
        create: [
          { nome: 'Espresso Longo', preco: 8.0 },
          { nome: 'Espresso Curto', preco: 7.5 },
          { nome: 'Latte', preco: 15.5 },
          { nome: 'Cappuccino', preco: 11.0 },

          { nome: 'Quiches', preco: 18.0 },
          { nome: 'Tapioca Frango', preco: 15.5 },
          { nome: 'Queijo Quente', preco: 24.0 },

          { nome: 'Croissant', preco: 18.0 },
          { nome: 'Croissant 4 Queijos', preco: 24.0 },

          { nome: 'Brownie', preco: 9.0 },

          { nome: 'Americano', preco: 10.0 },
          { nome: 'Cappuccino Doce de Leite', preco: 20.0 },
          { nome: 'Flat White', preco: 10.5 },

          { nome: 'Bolo do Dia', preco: 11.0 },
          { nome: 'Pão de Queijo (Unidade)', preco: 7.0 },
          { nome: 'Cinnamon Roll', preco: 10.0 },

          { nome: 'Cookie', preco: 12.0 },
          { nome: 'Pão na Chapa', preco: 14.0 },
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

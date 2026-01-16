import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Semeando Cardápio Gudy (Modo Seguro)...');

  const concorrentesExistentes = await prisma.competidor.findMany();

  for (const c of concorrentesExistentes) {
    await prisma.competidor.update({
      where: { id: c.id },
      data: { itens: { deleteMany: {} } },
    });
  }

  await prisma.competidor.deleteMany({});
  await prisma.meuCardapio.deleteMany({});

  console.log('🧹 Limpeza concluída sem erros.');

  const meuMenu = [
    { nome: 'Misto Quente', preco: 13.0, categoria: 'Salgados' },
    { nome: 'Queijo Quente', preco: 20.0, categoria: 'Salgados' },
    { nome: 'Omelete', preco: 13.0, categoria: 'Brunch' },
    { nome: 'Quiches', preco: 15.0, categoria: 'Salgados' },

    { nome: 'Toast Avocado', preco: 22.0, categoria: 'Toasts' },
    { nome: 'Toast Caprese', preco: 20.0, categoria: 'Toasts' },

    { nome: 'Waffle', preco: 18.0, categoria: 'Sobremesas' },
    { nome: 'Tiramissu', preco: 20.0, categoria: 'Sobremesas' },
    { nome: 'Brownie', preco: 11.0, categoria: 'Sobremesas' },
    { nome: 'Croissant com Nutella', preco: 25.0, categoria: 'Sobremesas' },
    { nome: 'Cookie Recheado', preco: 10.0, categoria: 'Sobremesas' },

    { nome: 'Espresso Curto', preco: 6.0, categoria: 'Cafés' },
    { nome: 'Espresso Longo', preco: 8.0, categoria: 'Cafés' },
    { nome: 'Cappuccino', preco: 14.0, categoria: 'Cafés' },
    { nome: 'Flat White', preco: 10.0, categoria: 'Cafés' },
    { nome: 'Mocha', preco: 16.0, categoria: 'Cafés' },
    { nome: 'Caramel Macchiato', preco: 16.0, categoria: 'Cafés' },
    { nome: 'Latte', preco: 10.0, categoria: 'Cafés' },
    { nome: 'Chocolate Quente', preco: 15.0, categoria: 'Cafés' },
    { nome: 'Vanilla Latte', preco: 14.0, categoria: 'Cafés' },

    { nome: 'Frapês', preco: 18.0, categoria: 'Gelados' },
    { nome: 'Affogato', preco: 12.0, categoria: 'Gelados' },
    { nome: 'Iced Caramel', preco: 16.0, categoria: 'Gelados' },
    { nome: 'Mochaccino', preco: 16.0, categoria: 'Gelados' },
    { nome: 'Soda Italiana', preco: 12.0, categoria: 'Gelados' },
    { nome: 'Sucos', preco: 12.0, categoria: 'Gelados' },
    { nome: 'Matcha', preco: 8.0, categoria: 'Chás' },
    { nome: 'Matcha Latte', preco: 12.0, categoria: 'Chás' },

    { nome: 'Croissant Carne Bovina', preco: 26.0, categoria: 'Croissants' },
    { nome: 'Croissant Frango', preco: 25.0, categoria: 'Croissants' },
    { nome: 'Croissant 4 Queijos', preco: 22.0, categoria: 'Croissants' },
    {
      nome: 'Croissant Presunto e Queijo',
      preco: 20.0,
      categoria: 'Croissants',
    },
    { nome: 'Croissant Lombo', preco: 20.0, categoria: 'Croissants' },
    { nome: 'American Toast', preco: 25.0, categoria: 'Toasts' },
    { nome: 'Toast Parm', preco: 24.0, categoria: 'Toasts' },
    { nome: 'Toast Carne Agridoce', preco: 28.0, categoria: 'Toasts' },
    { nome: 'Toast de Frango', preco: 27.0, categoria: 'Toasts' },
    { nome: 'Toast Brûlée', preco: 16.0, categoria: 'Sobremesas' },
    { nome: 'Gudy do Chefe', preco: 16.0, categoria: 'Salgados' },
    {
      nome: 'Pão de Queijo Coquetel (6un)',
      preco: 17.0,
      categoria: 'Salgados',
    },
    { nome: 'Pão de Queijo Recheado', preco: 17.0, categoria: 'Salgados' },
    { nome: 'Tapioca Carne Bovina', preco: 21.0, categoria: 'Salgados' },
    { nome: 'Tapioca Frango', preco: 20.0, categoria: 'Salgados' },
    { nome: 'Croque Madame', preco: 38.0, categoria: 'Brunch' },
    { nome: 'Cappuccino de Chocolate', preco: 14.0, categoria: 'Cafés' },
    { nome: 'Golden Latte', preco: 16.0, categoria: 'Cafés' },
    { nome: 'Gudy Cream', preco: 20.0, categoria: 'Cafés' },
    { nome: 'Choco Affogato', preco: 16.0, categoria: 'Gelados' },
    { nome: 'Bubbles Frutados', preco: 22.0, categoria: 'Especiais' },
    { nome: 'Strawberry Matcha Latte', preco: 16.0, categoria: 'Chás' },
    { nome: 'Dalgona Coffee', preco: 16.0, categoria: 'Especiais' },
    { nome: 'Strawberry Milk', preco: 16.0, categoria: 'Especiais' },
  ];

  for (const item of meuMenu) {
    await prisma.meuCardapio.create({ data: item });
  }

  console.log(
    `✅ Sucesso! Gudy Coffee cadastrada com ${meuMenu.length} itens.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

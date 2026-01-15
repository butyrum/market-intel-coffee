import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🥤 Adicionando Go Coffee (Cardápio Completo & Detalhado)...');

  // 1. Limpeza Segura (Apaga apenas a Go Coffee antiga)
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

  // 2. Cadastro do Cardápio
  await prisma.competidor.create({
    data: {
      nome: 'Go Coffee',
      cidade: 'Belo Horizonte', // Franquia
      itens: {
        create: [
          // ===========================================
          // ⚔️ BATALHA DE PREÇOS (Itens que você também tem)
          // ===========================================

          // COMIDAS
          { nome: 'Misto Quente', preco: 18.0 }, // O "Tostex" deles vs Seu Gudy Toast (13.00)
          { nome: 'Pão de Queijo', preco: 9.5 }, // Unidade grande deles vs Sua porção
          { nome: 'Croissant', preco: 15.0 }, // Simples (Manteiga) vs Seu (18.00)
          { nome: 'Croissant Recheado', preco: 21.0 }, // Presunto/Queijo vs Seu (27.00)
          { nome: 'Waffle', preco: 24.0 }, // Waffle belga deles vs Seu (18.00)
          { nome: 'Cookie Recheado', preco: 14.0 }, // Eles têm vários sabores vs Seu (10.00)
          { nome: 'Brownie', preco: 16.0 }, // vs Seu (11.00)

          // BEBIDAS QUENTES
          { nome: 'Espresso Curto', preco: 9.0 }, // O Espresso deles vs Seu (6.00)
          { nome: 'Cappuccino', preco: 17.0 }, // vs Seu (14.00)
          { nome: 'Latte', preco: 17.0 }, // vs Seu (10.00)
          { nome: 'Mocha', preco: 20.0 }, // vs Seu (16.00)
          { nome: 'Chocolate Quente', preco: 19.0 }, // vs Seu (15.00)
          { nome: 'Caramel Macchiato', preco: 21.0 }, // vs Seu (16.00)
          { nome: 'Chai Latte', preco: 22.0 }, // vs Seu (20.00)
          { nome: 'Matcha Latte', preco: 20.0 }, // vs Seu (12.00)

          // BEBIDAS GELADAS
          { nome: 'Frapês', preco: 26.0 }, // Média dos Frappés deles vs Seu (18.00)
          { nome: 'Soda Italiana', preco: 18.0 }, // vs Seu (12.00)
          { nome: 'Iced Caramel', preco: 22.0 }, // Caramel Iced Latte deles vs Seu (16.00)

          // ===========================================
          // ⚠️ GAPS & EXCLUSIVOS DELES (Você não tem igual)
          // ===========================================

          // SALGADOS DIFERENTES
          { nome: 'Pão de Batata', preco: 14.0 }, // Recheado (Frango/Requeijão)
          { nome: 'Empada', preco: 12.0 },
          { nome: 'Quiche Lorraine', preco: 18.0 }, // Você tem "Quiches" genérico, mas esse é específico
          { nome: 'Wrap de Frango', preco: 22.0 },

          // DOCES DIFERENTES (Forte deles)
          { nome: 'Donut', preco: 16.0 }, // Rosquinhas recheadas
          { nome: 'Muffin', preco: 18.0 }, // Blueberry/Chocolate
          { nome: 'Bolo Caseiro', preco: 12.0 }, // Fatia simples (Laranja/Cenoura)

          // BEBIDAS ESPECÍFICAS
          { nome: 'Espresso Tônica', preco: 20.0 },
          { nome: 'Cold Brew', preco: 16.0 },
          { nome: 'Frappé de Paçoca', preco: 28.0 }, // Sabor específico
          { nome: 'Frappé de Nutella', preco: 30.0 }, // Sabor específico premium
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

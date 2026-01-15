import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔧 Ajustando nome do Croissant na Cupping (Modo Seguro)...');

  // 1. Acha a Cupping Café
  const cupping = await prisma.competidor.findFirst({
    where: { nome: 'Cupping Café' },
  });

  if (cupping) {
    // 2. Mágica do Prisma: Atualiza o item ATRAVÉS do Competidor
    // Isso evita o erro de "prisma.item não existe"
    const resultado = await prisma.competidor.update({
      where: { id: cupping.id },
      data: {
        itens: {
          // "Procure nos meus itens quem se chama 'Croissant Simples' e mude para 'Croissant'"
          updateMany: {
            where: { nome: 'Croissant Simples' },
            data: { nome: 'Croissant' },
          },
        },
      },
    });

    console.log(
      `✅ Sucesso! O item 'Croissant Simples' foi renomeado para 'Croissant'.`,
    );
    console.log(
      `📊 Total de alterações: ${resultado ? 'Feito' : 'Nenhuma necessária'}`,
    );
  } else {
    console.error('❌ Erro: Cupping Café não encontrada no banco.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';
import { pokedex } from  '../data/pokedex';
const prisma = new PrismaClient();

const main = async () => {
  await prisma.pokemon.createMany({
    data: pokedex.map(pokemon => ({
      ...pokemon,
      nationalId: `${pokemon.id}`.padStart(3, '0'),
      imageUrl : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
    })),
  });
};

main()
  .catch(async e => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
import { copy } from 'fs-extra';

async function copyGenerated() {
  try {
    await copy('src/prisma-client', 'dist/src/prisma-client');
    console.log('Dossier Prisma généré copié avec succès.');
  } catch (err) {
    console.error('Erreur lors de la copie du dossier généré:', err);
  }
}

copyGenerated();
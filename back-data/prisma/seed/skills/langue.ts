import { prisma } from '../utils/utils';
import { Langue } from '@prisma/client';
import axios from 'axios';

/**
 * Création de la liste des langues
 * @param size taille de la liste
 * @returns la liste des langues créées
 */
export default async function createLangue(
  size: number,
  token: string
): Promise<Langue[]> {
  for (let i = 0; i < size; i++) {
    const response2 = await axios.get(
      'https://api.francetravail.io/partenaire/offresdemploi/v2/referentiel/langues',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    for (const item of response2.data) {
      await prisma.langue.upsert({
        where: {
          title: item.libelle,
        },
        update: {},
        create: {
          title: item.libelle,
        },
      });
    }
  }

  const langues: Langue[] = await prisma.langue.findMany();
  return langues;
}

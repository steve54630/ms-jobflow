import { faker } from '@faker-js/faker/locale/fr';
import { Langue } from '@prisma/client';
import { getRandomElement, prisma, arrayLangues, Member } from '../utils/utils';
import { promises } from 'fs';

/**
 * Ajout des langues amitrisés par le membre
 * @param members les membres de l'application
 * @param langues la liste de langue de l'application
 * @returns les langues des membres
 */
export default async function addLangueToMembers(
  members: Member[],
  langues: Langue[],
) {
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < getRandomElement<number>(arrayLangues); j++) {
      const lang = getRandomElement<Langue>(langues).id;

      await prisma.member_langue.upsert({
        where: {
          member_id_langue_id: {
            member_id: members[i].id,
            langue_id: lang,
          },
        },
        update: {},
        create: {
          member_id: members[i].id,
          langue_id: lang,
          level: faker.lorem.word(),
        }
      });
    }

    const langData = await prisma.member_langue.findMany({
      where: {
        member_id: members[i].id,
      },
      select: {
        langue: {
          omit: {
            created_at: true,
            updated_at: true,
          },
        },
      },
    });

    await promises.writeFile(
      `../shared-data/langues/${members[i].id}.json`,
      JSON.stringify(
        langData.map((item) => item.langue),
        null,
        2,
      ),
      'utf-8',
    );
  }

  const member_langues = await prisma.member_langue.findMany();
  return member_langues;
}

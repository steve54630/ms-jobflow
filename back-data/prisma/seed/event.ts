import { faker } from '@faker-js/faker/locale/fr';
import { prisma, getRandomElement, Member } from './utils/utils';
import { Job_offer } from '@prisma/client';

/**
 * Création d'événements de membres liés à ces offres
 * @param members : les membres de l'application
 * @param offer : la liste des offres de l'application
 */
export default async function createEvent(
  members: Member[],
  offer: Job_offer[]
) {
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < 5; j++) {
      let start_date = faker.date.future();

      await prisma.event.create({
        data: {
          start_date,
          end_date: faker.date.future({ refDate: start_date }),
          title: faker.lorem.words(4),
          member_id: members[i].id,
          job_offer_id: getRandomElement(offer).id,
        },
      });
    }
  }
}

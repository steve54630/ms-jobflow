import { faker } from '@faker-js/faker/locale/fr';
import { arrayActivity, getRandomElement, Member, prisma } from '../utils/utils';
import { Activity } from '@prisma/client';

/**
 * Création de plusieurs activités
 * @param members les membres de l'application
 * @return les activités créées
 */
export default async function createActivity(
  members: Member[]
): Promise<Activity[]> {
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < getRandomElement(arrayActivity); j++) {
      let start_date = faker.date.past();

      await prisma.activity.create({
        data: {
          start_date: start_date,
          end_date: faker.date.between({ from: start_date, to: Date.now() }),
          title: faker.person.jobTitle(),
          member_id: members[i].id,
          location: faker.location.city(),
        },
      });
    }
  }

  const activities = await prisma.activity.findMany();
  return activities;
}

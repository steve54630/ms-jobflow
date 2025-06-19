import { faker } from '@faker-js/faker/locale/fr';
import {
  arrayExperiences,
  getRandomElement,
  Member,
  prisma,
} from '../utils/utils';
import { Experience } from '@prisma/client';
import { promises } from 'fs';

/**
 * Ajout de formations aux membres
 * @param members les membres de l'application
 * @return les exériences créées
 */
export default async function addExperienceToMembers(
  members: Member[],
): Promise<Experience[]> {
  for (let i = 0; i < members.length; i++) {
    const experiences: any[] = [];

    for (let j = 0; j < getRandomElement(arrayExperiences); j++) {
      let start_date = faker.date.past();

      const experience = await prisma.experience.create({
        data: {
          start_date: start_date,
          end_date: faker.date.between({ from: start_date, to: Date.now() }),
          title: faker.person.jobTitle(),
          company_name: faker.company.name(),
          location: faker.location.city(),
          member_id: members[i].id,
        },
        omit: {
          created_at: true,
          updated_at: true,
        }
      });

      experiences.push(experience);
    }

    await promises.writeFile(
      `../shared-data/experiences/${members[i].id}.json`,
      JSON.stringify(experiences, null, 2),
      'utf-8',
    );
  }

  const experiences = await prisma.experience.findMany();
  return experiences;
}

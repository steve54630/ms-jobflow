import { Education } from '@prisma/client-data';
import {
  arrayEducation,
  getRandomElement,
  Member,
  prisma,
} from '../utils/utils';
import { faker } from '@faker-js/faker/locale/fr';
import { promises } from 'fs';

/**
 * Ajout de formations aux membres
 * @param members les membres de l'application
 * @returns les formations créées
 */
export default async function addEducationToMembers(
  members: Member[],
): Promise<Education[]> {
  for (let i = 0; i < members.length; i++) {
    const educations: any[] = [];

    for (let j = 0; j < getRandomElement(arrayEducation); j++) {
      let start_date = faker.date.past();

      const education = await prisma.education.create({
        data: {
          start_date: start_date,
          is_obtained: faker.datatype.boolean(),
          end_date: faker.date.between({ from: start_date, to: Date.now() }),
          title: faker.person.jobTitle(),
          school_name: faker.company.name(),
          location: faker.location.city(),
          member_id: members[i].id,
        },
        omit: {
          created_at: true,
          updated_at: true,
        }
      });

      educations.push(education);
    }

    await promises.writeFile(
      `../shared-data/educations/${members[i].id}.json`,
      JSON.stringify(educations, null, 2),
      'utf-8',
    );
  }

  const educations = await prisma.education.findMany();
  return educations;
}

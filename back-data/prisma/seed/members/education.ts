import { Education } from '@prisma/client';
import { arrayEducation, getRandomElement, Member, prisma } from '../utils/utils';
import { faker } from '@faker-js/faker/locale/fr';

/**
 * Ajout de formations aux membres
 * @param members les membres de l'application
 * @returns les formations créées
 */
export default async function addEducationToMembers(
  members: Member[]
): Promise<Education[]> {
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < getRandomElement(arrayEducation); j++) {
      let start_date = faker.date.past();

      await prisma.education.create({
        data: {
          start_date: start_date,
          is_obtained: faker.datatype.boolean(),
          end_date: faker.date.between({ from: start_date, to: Date.now() }),
          title: faker.person.jobTitle(),
          school_name: faker.company.name(),
          location: faker.location.city(),
          member_id: members[i].id,
        },
      });
    }
  }

  const educations = await prisma.education.findMany();
  return educations;
}

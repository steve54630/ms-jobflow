import { faker } from '@faker-js/faker/locale/fr';
import { Mad_skill} from '@prisma/client';
import {
  prisma,
  getRandomElement,
  madSkillCategory,
  arrayMadSkills,
  Member,
} from '../utils/utils';

/**
 * Ajout des madskills à un membre
 * @param members les membres de l'application
 * @returns les madskills créées
 */
export default async function createMadSkill(
  members: Member[],
  size: number
): Promise<Mad_skill[]> {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < getRandomElement(arrayMadSkills); j++) {
      const member_id = getRandomElement(members).id;
      const title = faker.person.zodiacSign();
      const category = getRandomElement(madSkillCategory);

      await prisma.mad_skill.upsert({
        where: {
          uniqueSkills: {
            title,
            member_id,
            category,
          },
        },
        update: {},
        create: {
          category,
          title,
          member_id,
        },
      });
    }
  }

  const mad_skills: Mad_skill[] = await prisma.mad_skill.findMany();
  return mad_skills;
}

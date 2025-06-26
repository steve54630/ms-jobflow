import { faker } from '@faker-js/faker/locale/fr';
import { Mad_skill } from '@prisma/client-data';
import {
  prisma,
  getRandomElement,
  madSkillCategory,
  arrayMadSkills,
  Member,
} from '../utils/utils';
import { promises } from 'fs';

/**
 * Ajout des madskills à un membre
 * @param members les membres de l'application
 * @returns les madskills créées
 */
export default async function createMadSkill(
  members: Member[],
  size: number,
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
        omit: {
          created_at: true,
          updated_at: true,
        }
      });
    }

    const skillsData = await prisma.mad_skill.findMany({});

    await promises.writeFile(
      `../shared-data/madskills/skills.json`,
      JSON.stringify(skillsData, null, 2),
      'utf-8',
    );
  }

  const mad_skills: Mad_skill[] = await prisma.mad_skill.findMany();
  return mad_skills;
}

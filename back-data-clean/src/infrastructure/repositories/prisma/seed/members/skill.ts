import { Member_skill, Skill } from '@prisma/client-data';
import { getRandomElement, arrayNumber, prisma, Member } from '../utils/utils';
import { promises } from 'fs';

/**
 * Ajout des langues maitrisées par le membre
 * @param members les membres de l'application
 * @param skills la liste des compétences de l'application
 * @return les compétences des membres
 */
export default async function addSkillToMembers(
  members: Member[],
  skills: Skill[],
): Promise<Member_skill[]> {
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < getRandomElement<number>(arrayNumber); j++) {
      const type = getRandomElement<Skill>(skills).category;

      const skill = getRandomElement<Skill>(
        skills.filter((item) => item.category === type),
      ).id;

      await prisma.member_skill.upsert({
        where: {
          member_id_skill_id: {
            member_id: members[i].id,
            skill_id: skill,
          },
        },
        update: {},
        create: {
          member_id: members[i].id,
          skill_id: skill,
        },
      });
    }

    const skillsData = await prisma.member_skill.findMany({
      where: {
        member_id: members[i].id,
      },
      select: {
        skill: {
          omit: {
            created_at: true,
            updated_at: true,
          },
        },
      },
    });

    await promises.writeFile(
      `../shared-data/skills/${members[i].id}.json`,
      JSON.stringify(
        skillsData.map((item) => item.skill),
        null,
        2,
      ),
      'utf-8',
    );
  }

  const member_skills = await prisma.member_skill.findMany();
  return member_skills;
}

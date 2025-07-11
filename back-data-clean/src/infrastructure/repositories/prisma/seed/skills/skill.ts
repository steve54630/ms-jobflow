import { prisma } from "../utils/utils";
import { $Enums, Skill } from '@prisma/client-data';
import { skills } from "../members/test";

/**
 * Création de la liste des skills 
 * @param size taille de la liste crée
 * @returns la liste des skills créée
 */
export default async function createSkill(size : number) : Promise<Skill[]>{

  for (const item of skills) {
    await prisma.skill.create({
      data: {
        category: item.category as $Enums.Skills,
        title: item.libelle,
      },
    });
  }

  const skillsData: Skill[] = await prisma.skill.findMany();
  return skillsData
}
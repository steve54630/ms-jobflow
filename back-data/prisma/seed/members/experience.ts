import { faker } from "@faker-js/faker/locale/fr";
import { arrayExperiences, getRandomElement, Member, prisma } from "../utils/utils";
import { Experience } from "@prisma/client";

/**
 * Ajout de formations aux membres
 * @param members les membres de l'application
 * @return les exériences créées
 */
export default async function addExperienceToMembers(members : Member[]): Promise<Experience[]> {
  
    for (let i = 0; i < members.length; i++) {
        for (let j = 0; j < getRandomElement(arrayExperiences); j++) {
          let start_date = faker.date.past();
    
          await prisma.experience.create({
            data: {
              start_date: start_date,
              end_date: faker.date.between({ from: start_date, to: Date.now() }),
              title: faker.person.jobTitle(),
              company_name: faker.company.name(),
              location: faker.location.city(),
              member_id: members[i].id,
            },
          });
        }
      }

      const experiences = await prisma.experience.findMany();
      return experiences;
}
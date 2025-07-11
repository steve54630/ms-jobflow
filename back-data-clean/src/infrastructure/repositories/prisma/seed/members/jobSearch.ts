import { faker } from "@faker-js/faker/locale/fr";
import { getRandomElement, Member, prisma } from "../utils/utils";

/**
 * AJout d'offres favorites aux membres
 * @param members les membres de l'applications
 */
export default async function addJobSearchToMembers(members: Member[]) {
    for (let i = 0; i < members.length; i++) {
        await prisma.job_search.create({
          data: {
            title: faker.person.jobTitle(),
            search_field: faker.person.jobTitle(),
            member_id: getRandomElement(members).id,
          },
        });
      }
    
}
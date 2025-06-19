import { faker } from '@faker-js/faker/locale/fr';
import { Member, prisma } from '../utils/utils';

/**
 * Ajout d'un profile aux diffférents membres
 * @param members les membres de l'application
 */
export default async function createMembers(members: Member[]) {

  for (let i = 0; i < members.length; i++) {

    await prisma.profile.upsert({
      where: {
        member_id: members[i].id,
      },
      update: {},
      create: {
        firstname: members[i].firstName,
        lastname: members[i].lastName,
        picture: faker.image.personPortrait({ sex: members[i].sex as "male" | "female", size: 128 }),
        email: faker.internet.email({ firstName: members[i].firstName, lastName : members[i].lastName }),
        phone: faker.phone.number(),
        location: faker.location.city(),
        member_id: members[i].id,
        has_car: faker.datatype.boolean(),
      },
    });
  }

  return members;
}

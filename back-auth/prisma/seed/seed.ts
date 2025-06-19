import { faker, Sex } from '@faker-js/faker';
import { getRandomElement, prisma } from './utils/utils';
import { hash } from 'argon2';
import { promises } from 'fs';

async function main() {
  const sex = [Sex.Male, Sex.Female];

  const membersJson: any[] = [];

  for (let i = 0; i < 20; i++) {
    const randomSex = getRandomElement(sex);
    const firstName = faker.person.firstName(randomSex);
    const lastName = faker.person.lastName(randomSex);
    const email = faker.internet.email({ firstName, lastName });
    const username = faker.internet.username({ firstName, lastName });
    const password = faker.internet.password();
    const hashPassword = await hash(password);

    
    const member =await prisma.member.upsert({
      where: {
        username: username,
        email: email,
      },
      update: {},
      create: {
        username: username,
        email: email,
        password: hashPassword,
      },
    });

    membersJson.push({
      id: member.id,
      firstName,
      lastName,
      email: email,
      password: password,
      sex: randomSex,
    });

  }

    await promises.writeFile(
      '../shared-data/members.json',
      JSON.stringify(membersJson, null, 2),
      'utf-8',
    );
  
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

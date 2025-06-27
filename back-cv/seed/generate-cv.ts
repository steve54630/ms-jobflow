import {promises as fs} from 'fs';
import * as path from 'path';
import { pickRandom, readJson } from './utils';
import { faker } from '@faker-js/faker';

export async function generateCVs(basePath: string, outputPath: string) {
  const experienceDir = path.join(basePath, 'experiences');
  const members = await fs.readdir(experienceDir); // car chaque membre a au moins une expérience

  await fs.mkdir(outputPath, { recursive: true });

  for (const file of members) {
    const memberId = path.basename(file, '.json');

    const experiences = await readJson('experiences', memberId, basePath);
    const educations = await readJson('educations', memberId, basePath);
    const activities = await readJson('activities', memberId, basePath);
    const skills = await readJson('skills', memberId, basePath);
    const languages = await readJson('langues', memberId, basePath);
    const profile = await readJson('profile', memberId, basePath);
    const mad_skills = await readJson('mad_skills', memberId, basePath);

    const cv = {
      member_id: Number(memberId),
      title: 'CV de ' + profile['firstname'] + ' ' + profile['lastname'],
      tagline: faker.lorem.sentence(),
      profile,
      experiences: pickRandom(experiences, Math.floor(Math.random() * 3) + 1),
      educations: pickRandom(educations, 1),
      activities: pickRandom(activities, 1),
      skills: pickRandom(skills, 2),
      languages: pickRandom(languages, 2),
      madskills: pickRandom(mad_skills, 1)
    };

    await fs.writeFile(
      path.join(outputPath, `${memberId}.json`),
      JSON.stringify(cv, null, 2),
      'utf-8',
    );

    console.log(`CV généré pour membre ${memberId}`);
  }
}
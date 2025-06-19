// scripts/generate-cv-data.ts

import { promises as fs } from 'fs';
import * as path from 'path';
import { faker } from '@faker-js/faker';
import { connect, connection, model, Schema } from 'mongoose';

const basePath = path.join(__dirname, '..', 'shared-data');
const outputPath = path.join(basePath, 'cvs');

function pickRandom<T>(arr: T[], count: number): T[] {
  if (arr.length <= count) return arr;
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function readJson<T>(dir: string, memberId: string): Promise<T[]> {
  const filePath = path.join(basePath, dir, `${memberId}.json`);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function generateCVs() {
  const experienceDir = path.join(basePath, 'experiences');
  const members = await fs.readdir(experienceDir); // car chaque membre a au moins une expérience

  await fs.mkdir(outputPath, { recursive: true });

  for (const file of members) {
    const memberId = path.basename(file, '.json');

    const experiences = await readJson('experiences', memberId);
    const educations = await readJson('educations', memberId);
    const activities = await readJson('activities', memberId);
    const skills = await readJson('skills', memberId);
    const languages = await readJson('langues', memberId);
    const profile = await readJson('profile', memberId);
    const mad_skills = await readJson('mad_skills', memberId);

    const cv = {
      member_id: Number(memberId),
      title: 'CV de ' + profile['firstname'] + ' ' + profile['lastname'],
      tagline: faker.lorem.sentence(),
      profile,
      experiences: pickRandom(experiences, Math.floor(Math.random() * 3) + 1),
      educations: pickRandom(educations, 1),
      activities: pickRandom(activities, 1),
      skills: pickRandom(skills, 2),
      langues: pickRandom(languages, 2),
      mad_skills: pickRandom(mad_skills, 1)
    };

    await fs.writeFile(
      path.join(outputPath, `${memberId}.json`),
      JSON.stringify(cv, null, 2),
      'utf-8',
    );

    console.log(`CV généré pour membre ${memberId}`);
  }
}

// Ton schéma CV simplifié ici
const CVSchema = new Schema({
  member_id: Number,
  title: String,
  tagline: String,
  profile: Object,
  experiences: Array,
  educations: Array,
  skills: Array,
  mad_skills: Array,
  langues: Array,
  activities: Array,
});

const CVModel = model('CV', CVSchema);

async function seedCVs() {
  await connect('mongodb://root:example@localhost:27017/cv?authSource=admin');

  await CVModel.deleteMany({});

  const files = await fs.readdir(path.join(basePath, 'cvs'));

  for (const file of files) {
    const data = await fs.readFile(path.join(basePath, 'cvs', file), 'utf-8');
    const cv = JSON.parse(data);

    await CVModel.create(cv);
  }

  await connection.close();
}

generateCVs().catch(console.error);
seedCVs().catch((err) => {
  console.error('Erreur lors du seed :', err);
});

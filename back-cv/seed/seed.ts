// scripts/generate-cv-data.ts

import { promises as fs } from 'fs';
import * as path from 'path';
import { connect, connection, model, Schema } from 'mongoose';
import { generateCVs } from './generate-cv';

const basePath = path.join(__dirname, '../..', 'shared-data');
const outputPath = path.join(basePath, 'cvs');

// Ton schéma CV simplifié ici
const CVSchema = new Schema({
  member_id: Number,
  title: String,
  tagline: String,
  profile: Object,
  experiences: Array,
  educations: Array,
  skills: Array,
  madskills: Array,
  languages: Array,
  activities: Array,
});

const CVModel = model('CV', CVSchema);

async function main() {

  console.log(basePath)

  await generateCVs(basePath, outputPath);
  await connect('mongodb://root:example@localhost:27017/cv?authSource=admin');

  await CVModel.deleteMany({});

  const files = await fs.readdir(outputPath);

  for (const file of files) {
    const data = await fs.readFile(path.join(basePath, 'cvs', file), 'utf-8');
    const cv = JSON.parse(data);

    await CVModel.create(cv);
  }

  await connection.close();
}

main().catch(console.error);
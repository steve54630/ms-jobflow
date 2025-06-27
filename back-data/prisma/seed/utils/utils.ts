import { PrismaClient } from '../../../generated/prisma-client';

export type Member = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sex: string;
}

export function getRandomElement<T>(arr: T[]) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("L'argument doit être un tableau non vide.");
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export const arrayNumber = [6, 7, 8];

export function getArray(base: number, size: number): number[] {
  return Array.from({ length: size }, (_, i) => base + i);
}

export const formatDate = (date: Date): string =>
  date.toISOString().split('T')[0];

export const arrayExperiences = getArray(1, 15);

export const arrayEducation = getArray(2, 7);

export const arraySkills = getArray(5, 11);

export const arrayMadSkills = getArray(3, 4);

export const arrayActivity = getArray(0, 3);

export const arrayLangues = getArray(2, 5);

export const skillsCategory: any[] = ['hard', 'soft'];

export const madSkillCategory: any[] = ['interest', 'hobbies'];

export const prisma = new PrismaClient();

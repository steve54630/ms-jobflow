import * as path from "path";
import { promises as fs } from 'fs';

export function pickRandom<T>(arr: T[], count: number): T[] {
  if (arr.length <= count) return arr;
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export async function readJson<T>(dir: string, memberId: string, basePath: string): Promise<T[]> {
  const filePath = path.join(basePath, dir, `${memberId}.json`);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}
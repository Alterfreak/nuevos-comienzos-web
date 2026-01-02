import { promises as fs } from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export const readJson = async <T>(filename: string, fallback: T): Promise<T> => {
  try {
    const filePath = path.join(dataDir, filename);
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw) as T;
  } catch (error) {
    return fallback;
  }
};

export const writeJson = async <T>(filename: string, data: T): Promise<void> => {
  await fs.mkdir(dataDir, { recursive: true });
  const filePath = path.join(dataDir, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

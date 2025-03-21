import { promises as fs } from "fs";


export async function readJsonFile(filePath: string) {
  try {
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
    return data;
  } catch (e) {
    console.error("Error reading JSON file:", e);
    return [];
  }
}

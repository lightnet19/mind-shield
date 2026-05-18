'use server';

import fs from 'fs';
import path from 'path';

// Define the path to our flat JSON file database
const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

// Initialize DB if it doesn't exist
function initDb() {
  if (!fs.existsSync(DB_PATH)) {
    const initialData = {
      users: [],
      screening: [],
      evaluasi: [],
      chat: []
    };
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
  }
}

// Read data from the JSON file
export async function readDb() {
  try {
    initDb();
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading flat file DB:', error);
    return null;
  }
}

// Write data to the JSON file
export async function writeDb(data) {
  try {
    initDb();
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing to flat file DB:', error);
    return false;
  }
}

// Example operations
export async function getCollection(collectionName) {
  const db = await readDb();
  if (!db) return [];
  return db[collectionName] || [];
}

export async function insertItem(collectionName, item) {
  const db = await readDb();
  if (!db) return false;
  
  if (!db[collectionName]) {
    db[collectionName] = [];
  }
  
  // Create an ID if not exists
  const newItem = {
    id: item.id || Date.now().toString(),
    createdAt: new Date().toISOString(),
    ...item
  };
  
  db[collectionName].push(newItem);
  await writeDb(db);
  return newItem;
}

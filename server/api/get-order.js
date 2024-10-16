// server/api/get-order.js
import { readFile } from 'fs/promises';
import path from 'path';

export default defineEventHandler(async (event) => {
  try {
    const filePath = path.join(process.cwd(), 'content', 'files-order.json');
    
    const data = await readFile(filePath, 'utf-8'); // Lê o arquivo JSON
    console.log(JSON.parse(data));
    return JSON.parse(data); // Retorna o conteúdo como JSON
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    return { error: 'Erro ao ler o arquivo.' }; // Retorna um erro se ocorrer
  }
});

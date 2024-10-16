// server/api/get-directory-order.js
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  const { dir } = getQuery(event); // Pega o diretório da query string
  const dirPath = path.join(process.cwd(), 'content', dir, '_dir.md');

  try {
    // Lê o arquivo _dir.md
    const fileContent = await fs.readFile(dirPath, 'utf-8');
    const { data } = matter(fileContent); // Extrai o frontmatter usando gray-matter

    // Retorna a ordem definida no frontmatter
    return { order: data.order || [] };
  } catch (error) {
    console.error('Erro ao ler o _dir.md:', error);
    return { error: 'Erro ao ler o arquivo de diretório.' };
  }
});

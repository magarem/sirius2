import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const requestedPath = query.path;

  if (!requestedPath) {
    throw createError({ statusCode: 400, message: 'Parâmetro "path" é obrigatório' });
  }

  const fullPath = path.join(contentDir, requestedPath);
  console.log('fullPath:', fullPath);
  // Verifica se é um arquivo ou diretório
  const stat = await fs.stat(fullPath);

  if (stat.isFile() && fullPath.endsWith('.md')) {
    // Se for um arquivo, processa o arquivo individual
    const content = await fs.readFile(fullPath, 'utf-8');
    const { data, content: body } = matter(content);
    console.log('data---------:', data);
   
    const description = body.split('\n').find(line => line.trim() !== '');

    return {
      _path: fullPath.replace(contentDir, '').replace(/\\/g, '/'), // Caminho relativo
      ...data,
      description
    };
 }
})
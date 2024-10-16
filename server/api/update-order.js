// server/api/update-order.js
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { directory, newOrder } = body;

  try {
    // Caminho do arquivo _dir.md
    const dirPath = path.join(process.cwd(), 'content', directory, '_dir.md');

    // Lê o conteúdo do _dir.md existente
    const fileContent = await fs.readFile(dirPath, 'utf-8');
    const { data, content } = matter(fileContent);

    // Atualiza a ordem dos arquivos no frontmatter
    data.file = newOrder;

    // Reescreve o arquivo _dir.md com a nova ordem
    const newContent = matter.stringify(content, data);
    await fs.writeFile(dirPath, newContent, 'utf-8');

    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar ordem:', error);
    return { success: false, error: 'Erro ao atualizar ordem.' };
  }
});

// server/api/save-directory-order.js
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  const { dir, newOrder } = await useBody(event); // Pega o diretório e a nova ordem do corpo da requisição
  const dirPath = path.join(process.cwd(), 'content', dir, '_dir.md');

  try {
    // Lê o conteúdo existente do arquivo _dir.md
    const fileContent = await fs.readFile(dirPath, 'utf-8');
    const { data, content } = matter(fileContent); // Extrai o frontmatter e o conteúdo

    // Atualiza a ordem no frontmatter
    data.order = newOrder;

    // Escreve o novo conteúdo com a ordem atualizada
    const updatedFile = matter.stringify(content, data);
    await fs.writeFile(dirPath, updatedFile);

    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar a nova ordem:', error);
    return { error: 'Erro ao salvar a nova ordem.' };
  }
});

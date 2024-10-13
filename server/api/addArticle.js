import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  // Lê o corpo da requisição
  const body = await readBody(event);
  const { slug, frontmatter, content } = body;

  // Define o caminho para o arquivo Markdown
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  // Cria o conteúdo do arquivo Markdown
  const contentToSave = matter.stringify(content, frontmatter);

  // Tenta salvar o arquivo
  try {
    fs.writeFileSync(filePath, contentToSave, 'utf8');
    return { status: 'success', message: 'Artigo salvo com sucesso!' };
  } catch (error) {
    console.error('Erro ao salvar o artigo:', error);
    return { status: 'error', message: 'Erro ao salvar o artigo. Tente novamente.' };
  }
});

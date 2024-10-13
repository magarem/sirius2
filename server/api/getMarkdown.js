import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event); // Obtém o slug da query string
  console.log('slug', slug);
  // Define o caminho para o arquivo Markdown
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  console.log('filePath::::', filePath);
  // Verifica se o arquivo existe
  if (!fs.existsSync(filePath)) {
    return {
      statusCode: 404,
      message: 'Arquivo não encontrado',
    };
  }

  // Lê o conteúdo do arquivo
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent); // Extrai o frontmatter e o conteúdo
  console.log('content::::', content);
  return {
    frontmatter: data,
    body: content,
  };
});

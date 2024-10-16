import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
  // Pega o slug da query
  const { slug } = getQuery(event);

  // Define o caminho do arquivo baseado no slug
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  console.log('filePath:', filePath);
  // Verifica se o arquivo existe
  if (!fs.existsSync(filePath)) {
    return {
      statusCode: 404,
      message: 'Arquivo não encontrado',
    };
  }

  // Lê o arquivo
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Usa gray-matter para separar o frontmatter do conteúdo
  const { data, content } = matter(fileContent);

  // Retorna o frontmatter e o conteúdo
  return {
    frontmatter: data,
    content,
  };
});

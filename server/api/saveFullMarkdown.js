import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  // Obtém o corpo da requisição
  const body = await readBody(event);

  // Extraindo slug e fullMarkdownContent
  const { slug, fullMarkdownContent } = body;

  // Define o caminho do arquivo baseado no slug
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  try {
    // Salva o arquivo Markdown com o conteúdo completo
    fs.writeFileSync(filePath, fullMarkdownContent, 'utf8');

    // Retorna uma resposta de sucesso
    return {
      message: 'Conteúdo completo salvo com sucesso!',
    };
  } catch (error) {
    console.error('Erro ao salvar o arquivo:', error);
    return {
      statusCode: 500,
      message: 'Erro ao salvar o conteúdo completo.',
    };
  }
});

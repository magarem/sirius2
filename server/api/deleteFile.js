import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  // Obtém o corpo da requisição
  const { filePath } = await readBody(event);

  console.log('filePath>:', filePath);
  // Constrói o caminho absoluto do arquivo dentro da pasta "content"
  const fullPath = path.join(process.cwd(), 'content', filePath + '.md');
  console.log('fullPath>:', fullPath);
  try {
    // Verifica se o arquivo existe antes de tentar deletar
    await fs.access(fullPath);

    // Tenta remover o arquivo
    await fs.unlink(fullPath);
    // Retorna uma mensagem de sucesso
    return { message: 'File deleted successfully' };
  } catch (error) {
    // Retorna uma mensagem de erro se o arquivo não for encontrado ou se houver outro erro
    return { error: 'File not found or error deleting file' };
  }
});

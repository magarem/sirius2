import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  // Obtém os dados do corpo da requisição
  const { oldFileName, newFileName } = await readBody(event);

  // Caminho para a pasta "content" na raiz do projeto
  const contentDir = path.join(process.cwd(), 'content');

  const directory = path.dirname(oldFileName);
  // Caminhos completos para o arquivo antigo e o novo
  const oldFilePath = path.join(contentDir, oldFileName);
  const newFilePath = path.join(contentDir, directory + '/' + newFileName);

  try {
    // Verifica se o arquivo antigo existe
    await fs.access(oldFilePath);
    console.log('----------rename------');
    // Renomeia o arquivo
    await fs.rename(oldFilePath, newFilePath);
    console.log(oldFilePath, newFilePath);
    // Retorna uma mensagem de sucesso
    return { message: `File renamed successfully from ${oldFileName} to ${newFileName}` };
  } catch (error) {
    // Retorna uma mensagem de erro caso o arquivo não seja encontrado ou haja outro erro
    return { error: 'File not found or error renaming file' };
  }
});

import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  try {
    // Caminho absoluto para a pasta 'public/upload'
    const uploadsDir = path.resolve('public/upload');

    // Lê o conteúdo da pasta
    const files = await fs.readdir(uploadsDir);

    // Retorna a lista de arquivos
    return {
      success: true,
      files
    };
  } catch (error) {
    // Caso ocorra algum erro (ex: pasta não encontrada)
    return {
      success: false,
      message: 'Erro ao listar arquivos.',
      error: error.message
    };
  }
});

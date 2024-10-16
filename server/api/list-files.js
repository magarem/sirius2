import { readdir, stat } from 'fs/promises';
import path from 'path';

// Função recursiva para ler diretórios e subdiretórios
async function readDirectoryRecursive(dir) {
  let results = [];

  try {
    // Lê o conteúdo do diretório
    const list = await readdir(dir);

    // Percorre cada item do diretório
    for (const file of list) {
      const filePath = path.join(dir, file);
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) {
        // Se for um diretório, chama a função recursivamente
        const subDir = await readDirectoryRecursive(filePath);
        results.push({
          type: 'directory',
          name: file,
          children: subDir, // Inclui os arquivos/diretórios dentro do subdiretório
        });
      } else {
        // Se for um arquivo, adiciona à lista
        results.push({
          type: 'file',
          name: file,
        });
      }
    }
  } catch (error) {
    console.error('Erro ao ler o diretório:', error);
  }

  return results;
}

export default defineEventHandler(async () => {
  try {
    // Define o caminho para o diretório "content"
    const dirPath = path.join(process.cwd(), 'content');

    // Chama a função recursiva para listar o conteúdo
    const filesTree = await readDirectoryRecursive(dirPath);

    // Retorna a árvore de arquivos e diretórios
    return { files: filesTree };
  } catch (error) {
    // Em caso de erro, retorna a mensagem de erro
    return { error: 'Erro ao listar arquivos', details: error.message };
  }
});

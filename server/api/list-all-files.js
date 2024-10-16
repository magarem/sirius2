// server/api/list-all-files.js
import { promises as fs } from 'fs';
import path from 'path';

// Função recursiva para construir a árvore de diretórios
const buildFileTree = async (dir) => {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map(async (dirent) => {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      return {
        name: dirent.name,
        type: 'directory',
        children: await buildFileTree(res) // Recorre para diretórios
      };
    } else if (dirent.name !== '_dir.md') {
      return {
        name: dirent.name,
        type: 'file'
      };
    }
  }));

  return files.filter(Boolean); // Remove entradas undefined/nulas
};

export default defineEventHandler(async () => {
  try {
    const contentDir = path.join(process.cwd(), 'content'); // Caminho da pasta 'content'
    const fileTree = await buildFileTree(contentDir); // Constroi a árvore de arquivos

    return { fileTree };
  } catch (error) {
    console.error('Erro ao listar arquivos:', error);
    return { error: 'Erro ao listar arquivos.' };
  }
});

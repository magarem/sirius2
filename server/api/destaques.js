import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async (event) => {
  const files = await getMarkdownFiles(contentDir);

  const destaques = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const { data, content: body } = matter(content);

    // Ignorar arquivos que terminam com _dir.md
    if (path.basename(file).includes('_dir.md')) continue;

    // Apenas pegar os destaques (featured > -1)
    if (data.featured > -1) {
      const description = body.split('\n').find(line => line.trim() !== '');
      destaques.push({
        _path: file.replace(contentDir, '').replace(/\\/g, '/'), // Caminho relativo
        ...data,
        description
      });
    }
  }

  // Ordenar os resultados
  destaques.sort((a, b) => a.featured - b.featured);

  return destaques;
});

// Função que retorna todos os arquivos markdown de forma recursiva
async function getMarkdownFiles(dir) {
  let files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files = [...files, ...(await getMarkdownFiles(fullPath))];
    } else if (item.isFile() && item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const requestedPath = query.path;

  if (!requestedPath) {
    throw createError({ statusCode: 400, message: 'Parâmetro "path" é obrigatório' });
  }

  const fullPath = path.join(contentDir, requestedPath);

  // Verifica se é um arquivo ou diretório
  const stat = await fs.stat(fullPath);

  if (stat.isFile() && fullPath.endsWith('.md')) {
    // Se for um arquivo, processa o arquivo individual
    const content = await fs.readFile(fullPath, 'utf-8');
    const { data, content: body } = matter(content);

    // Ignora arquivos que terminam com _dir.md
    if (path.basename(fullPath).includes('_dir.md')) {
      throw createError({ statusCode: 404, message: 'Arquivo não encontrado' });
    }

    const description = body.split('\n').find(line => line.trim() !== '');

    return {
      _path: fullPath.replace(contentDir, '').replace(/\\/g, '/'), // Caminho relativo
      ...data,
      description
    };
  } else if (stat.isDirectory()) {
    // Se for um diretório, processa todos os arquivos markdown dentro dele
    const files = await getMarkdownFiles(fullPath);
    const destaques = [];

    for (const file of files) {
      const content = await fs.readFile(file, 'utf-8');
      const { data, content: body } = matter(content);

      // Ignora arquivos que terminam com _dir.md
      if (path.basename(file).includes('_dir.md')) continue;

      const description = body.split('\n').find(line => line.trim() !== '');

      destaques.push({
        _path: file.replace(contentDir, '').replace(/\\/g, '/'), // Caminho relativo
        ...data,
        description
      });
    }

    // Ordena os resultados
    destaques.sort((a, b) => a.featured - b.featured);

    return destaques;
  } else {
    throw createError({ statusCode: 404, message: 'Caminho inválido' });
  }
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

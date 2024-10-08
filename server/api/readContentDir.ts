import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Função para obter o primeiro parágrafo do conteúdo markdown
function getFirstParagraph(content) {
  const paragraphs = content.split('\n\n'); // Divide o texto em parágrafos (separados por duas quebras de linha)
  return paragraphs[0] || ''; // Retorna o primeiro parágrafo ou vazio
}

// Função para ler recursivamente todos os arquivos .md de um diretório
async function readMarkdownFiles(dir, baseDir) {
  const files = await fs.readdir(dir);
  const results = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      // Se for um diretório, recursivamente lê seus arquivos
      const subdirectoryFiles = await readMarkdownFiles(filePath, baseDir);
      results.push(...subdirectoryFiles);
    } else if (file.endsWith('.md') && file !== '_dir.md') {
      // Se for um arquivo markdown, processa
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);

      // Adiciona o objeto com _path relativo, frontmatter e primeiro parágrafo
      results.push({
        _path: path.relative(baseDir, filePath).replace('.md',''), // Caminho relativo a partir de "content"
        ...frontmatter, // Desestruturação para incluir o frontmatter como parâmetros do objeto
        description: getFirstParagraph(content), // Primeiro parágrafo do corpo
      });
    }
  }

  return results;
}

// Função principal que é chamada quando o endpoint da API é acessado
export default defineEventHandler(async (event) => {
  try {
    // Obtém o diretório inicial a partir da query da URL ou usa o diretório raiz 'content'
    const query = getQuery(event);
    const subdirectory = query.dir || ''; // Obtém o valor de "dir" da URL (ex: /api/readMarkdown?dir=blog)
    
    // Define o caminho para o subdiretório do content
    const contentDirectory = path.join(process.cwd(), 'content', subdirectory);

    // Verifica se o diretório existe
    const stat = await fs.stat(contentDirectory);
    if (!stat.isDirectory()) {
      throw new Error(`Diretório ${subdirectory} não encontrado`);
    }

    // Chama a função para ler os arquivos .md
    const markdownFilesData = await readMarkdownFiles(contentDirectory, path.join(process.cwd(), 'content'));

    // Retorna os dados dos arquivos markdown como resposta da API
    return markdownFilesData;
  } catch (error) {
    // Retorna erro no caso de falha
    return { error: 'Erro ao ler os arquivos Markdown', details: error.message };
  }
});

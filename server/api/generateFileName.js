import { existsSync } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const now = new Date();
  const { dir } = getQuery(event)
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês zero-indexado
  const year = now.getFullYear();

  // Nome base do arquivo: dia_mes_ano
  let baseFileName = `${day}_${month}_${year}`;
  let fileName = baseFileName;
  let sequence = 1;

  // Diretório onde os arquivos são salvos (ajuste conforme necessário)
  const directory = path.join(process.cwd(), 'content', dir);
  console.log('directory:', directory);
  // Verifica se o arquivo existe e adiciona uma sequência numérica
  while (existsSync(path.join(directory, `${fileName}.md`))) {
    fileName = `${baseFileName}_${sequence}`;
    sequence++;
  }

  // Retorna o nome do arquivo
  return { fileName: `${fileName}` };
});

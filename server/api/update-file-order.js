import { writeFile } from 'fs/promises';
import path from 'path';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const filesOrder = body.files;
    console.log('--------------------files-----------');
    console.log(filesOrder);

    // Supondo que você queira salvar a ordem dos arquivos em um JSON
    const orderFilePath = path.join(process.cwd(), 'content', 'files-order.json');

    // Escreve a nova ordem em um arquivo JSON
    await writeFile(orderFilePath, JSON.stringify(filesOrder, null, 2), 'utf-8');

    return { message: 'Ordem dos arquivos salva com sucesso!' };
  } catch (error) {
    return { error: 'Erro ao salvar a ordem dos arquivos', details: error.message };
  }
});

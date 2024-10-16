// server/api/addFile.js
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Pacote para manipulação de frontmatter YAML em markdown

export default defineEventHandler(async (event) => {
    const { dirName, newFileName } = getQuery(event); // Obtém parâmetros de query
    const filePath = path.join(process.cwd(), 'content', dirName, '_dir.md'); // Caminho do arquivo _dir.md
    console.log('--------->>filePath', filePath);
    try {
        // Ler o conteúdo do arquivo _dir.md
        let fileContent = await fs.readFile(filePath, 'utf8');
        console.log('--------->>fileContent', fileContent);
        // Parsear o conteúdo do markdown
        const parsed = matter(fileContent);
        console.log('--------->>parsed', parsed);
        // Atualizar o array files_order com o novo arquivo, se ele ainda não estiver presente
        if (!parsed.data.files_order.includes(newFileName)) {
            parsed.data.files_order.push(newFileName);
        }

        // Reescrever o conteúdo do markdown com o array atualizado
        const newContent = matter.stringify(parsed.content, parsed.data);
        await fs.writeFile(filePath, newContent, 'utf8');

        return { success: true, message: 'Arquivo adicionado com sucesso!' };
    } catch (error) {
        return { success: false, message: `Erro ao adicionar arquivo: ${error.message}` };
    }
});

import { promises as fs } from 'fs';
import { join } from 'path';

const contentDir = join(process.cwd(), 'content');

export default defineEventHandler(async () => {
  const buildTree = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    const tree = await Promise.all(entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        const children = await buildTree(fullPath);
        return {
          name: entry.name,
          type: 'directory',
          path: fullPath.replace(process.cwd(), ''), // Retorna o caminho relativo
          children
        };
      } else {
        return {
          name: entry.name,
          type: 'file',
          path: fullPath.replace(process.cwd(), '') // Retorna o caminho relativo
        };
      }
    }));

    return tree;
  };

  const tree = await buildTree(contentDir);
  return tree;
});

import { readdir } from 'node:fs/promises';
var fileList
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const dir = query.dir

  async function go(dir){
    try {
        let files =  await readdir(dir, { recursive: true });
        console.log(files);
        files = files.map(x=>dir.replace('public/','/')+'/'+x)
        return files
      } catch (err) {
        console.error(err);
    }
  }
  

  return go(dir)
})
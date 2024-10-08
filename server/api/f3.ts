// server/api/recent-contents/ts
import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    let id = query.id as string
    let dir = query.dir as string
    console.log('id---->>', id);
    console.log('dir---->>', dir);
    let docs
    let ret
    if (dir) {
        docs  = await serverQueryContent(event).where({ _dir: dir }).find();
        docs.map((doc)=> {
            delete doc.body
        })
    }

    if (id) {
        docs  = await serverQueryContent(event).where({ _id: id   }).find();
    }
        
    if (!id && !dir) {
        docs = await serverQueryContent(event).find();
        docs.map((doc)=> {
            delete doc.body
        })
    }
   
    
    const baseUrl = "";
    // let ret = docs.filter(doc => doc._path?.includes(id.replace('.md',''))).map((doc)=>{
    //     return doc
    // })
    // console.log(ret);
    console.log('docs:::', docs)
    return docs
});


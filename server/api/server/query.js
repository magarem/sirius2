import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const query = serverQueryContent(event);
  return await query.find();
});

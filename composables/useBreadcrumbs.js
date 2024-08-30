// composables/useBreadcrumbs.js
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app'; // Para uso de async data em Nuxt 3
// import { queryContent } from '#content'; // Função correta para buscar conteúdo no @nuxt/content

export async function useBreadcrumbs() {
  const route = useRoute();
  const pathArray = route.path.split('/').filter((segment) => segment); // Divide o path e remove segmentos vazios
  console.log('pathArray', pathArray);
  // Função assíncrona para buscar o título de um segmento de caminho
  const getTitle = async (path) => {
    // Primeiro tenta buscar o arquivo normal
    let { data } = await useAsyncData(`content-${path}`, () =>
      queryContent(path).only(['_path', 'title']).findOne()
    );
    // Se não achar, tenta buscar o arquivo _dir.md para diretórios
    if (!data || !data.value) {
      ({ data } = await useAsyncData(`content-${path}-dir`, () =>
        queryContent(`${path}/_dir`).only(['_path', 'title']).findOne()
      ));
    }

    return data && data.value ? data.value._dir?.title||data.value.title : path; // Retorna o título ou o segmento original se o título não estiver disponível
  };

  // Mapeia os breadcrumbs para incluir o título correto de cada segmento
  const breadcrumbs = await Promise.all(
    pathArray.map(async (segment, index) => {
      const path = pathArray.slice(0, index + 1).join('/'); // Caminho cumulativo
      const title = await getTitle(path); // Busca o título a partir do conteúdo
      const link = `/${path}`; // Cria o link

      return { title, link };
    })
  );

  return breadcrumbs;
}

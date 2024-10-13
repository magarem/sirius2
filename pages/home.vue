<template>

  <Carrossel :info="Destaques_info" :data="destaques" class="bg-slate-50 dark:bg-zinc-900"/>

  <section class="mt-7 lg:pb-10">
      <MarqueeGroup :marqeeItems="marqeeItems"/>
    </section>
  <About :data="about" class="text-slate-500 dark:text-default-950"/>
  <cards class="container mb-10" :info="{
      title: 'Soluções',
      desc: '',
      show: ['image', 'title', 'description'],
      limit: 6
    }" :items="solucoes" />

  <cards class="container" :info="{
      title: 'Portfólio',
      show: ['image', 'title', 'description'],
      limit: 6
    }" :items="portfolio" />
<br/>
<br/>
</template>

<script setup lang="ts">
// definePageMeta({
//     layout: 'default'
// })

import Carrossel from '@/components/Carrossel.vue'
import MarqueeGroup from '@/components/MarqueeGroup.vue'
import About from '@/components/About.vue'
import { parseMarkdown } from '~/utils/parseMarkdown'

const data2 = ref([])
const resultGeral = ref([])
const marqeeItems = [
      'Desenvolvimento',
      'Webmarketing',
      'Segurança de redes',
      'Ambiente Linux'
    ]
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
const load = async (session) => {
  // const { data } = await useAsyncData('data-' + session, () => queryContent(session).find())
  // data.value = data.value.filter(x => !x._file?.includes("_dir.md"))
 
   
  // const isDir = await $fetch(`/api/isDir?filename=content/${session}`)
  console.log("!oi!");
  
  //  if (isDir){
  //     const { data: markdownContent } = await useAsyncData('markdownContent', () => 
  //     $fetch('/api/readMarkdown?subdir=meu-subdiretorio'));
  //     return markdownContent
  //  }else{
      const { data: arquivoMarkdown } = await useAsyncData('arquivoMarkdown', () => 
      $fetch('/api/readMD?path=' + session) );
      console.log('arquivoMarkdown:', arquivoMarkdown);
      
      return arquivoMarkdown.value
  //  }

  //  const { data, pending, error } = await useFetch('/api/readContentDir?dir='+session)
   
  //  const result = await $fetch(`/api/read?filename=content/${session}.md`)
  //  console.log('result:', result);
  
  //  data2.value.push(await parseMarkdown(result))
  
  // if (isDir){
  //   console.log("essa é dir");
  //   resultGeral.value = [...data.value]
  // }else{
  //   console.log("essa é não é dir");
  //   resultGeral.value = [...data2.value]
  // }
    


  // // const { data, pending, error } = await useFetch('/api/readContentDir?dir='+session)
 
  // console.log('resultGeral.value:', resultGeral.value);
 
  // return resultGeral.value
}

// const { data: destaques } = await useAsyncData('destaques', () => queryContent('/').where({ featured: { $gt: -1 } }).without(["body"]).sort({ featured: 1, $numeric: true }).find())
const { data: destaques } = await useAsyncData('destaques', () => 
  $fetch('/api/destaques')
);

// console.log('destaques:', destaques.value);

const about = await load("about.md")
console.log("------------------------22");

console.log('about:', about);

const solucoes = await load("solucoes")
console.log('solucoes', solucoes);

const portfolio = await load("portfolio")

</script>
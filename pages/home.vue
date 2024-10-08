<template>

  <Carrossel :info="Destaques_info" :data="destaques" class="bg-slate-50 dark:bg-zinc-900"/>

  <section class="mt-7 lg:pb-10">
      <MarqueeGroup :marqeeItems="marqeeItems"/>
    </section>

  <About :data="about[0]" class="text-slate-500 dark:text-default-950"/>
  
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
  const { data } = await useAsyncData('data-' + session, () => queryContent(session).find())
  data.value = data.value.filter(x => !x._file?.includes("_dir.md"))
  return data.value
}

const { data: destaques } = await useAsyncData('destaques', () => queryContent('/').where({ featured: { $gt: -1 } }).without(["body"]).sort({ featured: 1, $numeric: true }).find())
const about = await load("about")
const solucoes = await load("solucoes")
const portfolio = await load("portfolio")

</script>
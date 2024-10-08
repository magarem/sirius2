<script setup>
 definePageMeta({
    layout: ''
})
import { parseMarkdown } from '~/utils/parseMarkdown'

const result = ref(null)
const x = ref()
const loadMarkdown = async () => {
  const data = await $fetch('/api/read?filename=content/about.md')
//   const { data } = await useAsyncData('photos', () => $fetch('/api/read?filename=content/about.md'))
  result.value = await parseMarkdown(data)
  x.value = result.value.title

}
loadMarkdown()
</script>

<template>
    <div class="bg-green" v-if="result">
 {{ result.title }}
  <ContentRendererMarkdown :value="result" v-if="result" />


    </div>
   </template>
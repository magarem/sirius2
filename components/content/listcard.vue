<script setup>
import cards from "./cards.vue"
import { parseMarkdown } from '~/utils/parseMarkdown'

const route = useRoute()
const path = ref(route.params.path.join('/'))
const result = ref([])

console.log("path:", path.value);
// const data2 = await $fetch(`/api/read?filename=content/${path.value}/_dir.md`)
// result.value.push(await parseMarkdown(data2))
const { data, pending, error } = await useFetch('/api/readMD?path='+path.value)

// const { data } = await useAsyncData('session', () => queryContent(path.value).only(["_path", "title", "images", "_file", "description"]).find())
data.value = data.value.filter(x=>!x._file?.includes("_dir.md"))

const props = defineProps(['title'])
</script>

<template>
   <cards 
      class="container_" 
      :info="
        {
        desc: '', 
        show:['image', 'title', 'description'], 
        limit: 6}" 
      :items="data"
    />
</template>
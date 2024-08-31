<script setup>
import cards from "./cards.vue"
const route = useRoute()
const path = ref(route.params.path.join('/'))
const { data } = await useAsyncData('session', () => queryContent(path.value).only(["_path", "title", "images", "_file", "description"]).find())
data.value = data.value.filter(x=>!x._file?.includes("_dir.md"))

const props = defineProps(['title'])
</script>

<template>
   <cards 
      class="container" 
      :info="
        {
        title: props.title, 
        desc: 'Confira meus serviços', 
        show:['image', 'title', 'description'], 
        limit: 6}" 
      :items="data"
    />
</template>
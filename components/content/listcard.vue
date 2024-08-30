<script setup>
import cards from "./cards.vue"
const route = useRoute()
const path = ref(route.params.path.join('/'))
const { data } = await useAsyncData('session', () => queryContent(path.value).only(["_path", "title", "images", "_file"]).find())
data.value = data.value.filter(x=>!x._file?.includes("_dir.md"))
</script>

<template>
  <cards :items="data"/>
</template>
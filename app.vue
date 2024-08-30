<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'assets/css/style.css'

// definePageMeta({
//   middleware: ['auth']
// })

useHead({
  title: 'Magaweb',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'author', content: 'Magaweb' },
    {
      name: 'description',
      content:
        'A Magaweb production'
    }
  ]
})

useSeoMeta({
  title: 'Magaweb',
  description:
    'A Magaweb production'
})
</script>

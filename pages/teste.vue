<script setup>
const { data } = await useAsyncData('home2', () => queryContent('/').find())
</script>

<template>
  <pre>oi
   >> {{ data }}
  </pre>
</template>
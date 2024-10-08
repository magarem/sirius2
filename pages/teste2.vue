<template>
    <div class="container">
        oi
       [{{ data }}]
    </div>  
</template>
<script setup>
 definePageMeta({
    layout: ''
})
    // import data from "@/public/teste.json"
    // const { data } = await useFetch('http://localhost:3000/teste.json')
    const { data } = await useAsyncData('photos', () => $fetch('/api/read?filename=content/about.md'))
    
    console.log('data--->', data.value);
</script>
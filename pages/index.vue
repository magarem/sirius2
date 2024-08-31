<template>

    <Carrossel :info="Destaques_info" :data="destaques" />

    <!-- <section class="lg:pb-10">
      <MarqueeGroup />
    </section> -->

    <About :data="about" />

    <cards 
      class="container" 
      :info="
        {
        title: 'Serviços', 
        desc: 'Confira meus serviços', 
        show:['image', 'title', 'description'], 
        limit: 6}" 
      :items="services"
    />
    <cards class="container" :info="
        {
        title: 'Portfólio', 
        desc: 'Confira meus trabalhos', 
        show:['image', 'title', 'description'], 
        limit: 6}"  
      :items="portfolio"/>


</template>

<script setup lang="ts">
// definePageMeta({
//     layout: 'default'
// })

// import data from "@/data.json"
// import MarqueeGroup from '@/components/MarqueeGroup.vue'
// import info from '@/content/_dir.md'
import Carrossel from '@/components/Carrossel.vue'
// import Destaques_info from '@/content/destaques/_dir.md'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'


// import Work from '@/pages/landings/web-designer/components/Work.vue'


// import services_info from "@/content/services/_dir.md"
// import portfolio_info from "@/content/portfolio/_dir.md"
// const colorMode = useColorMode();
// colorMode.preference = 'dark'

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

// const { data: destaques } = await useAsyncData('destaques', () => queryContent('destaques').find())
const { data:destaques } = await useAsyncData('destaques', () => queryContent('/').where({ featured: { $gt: -1 } }).only(["_path", "title", "featured", "description", "images"]).sort({ featured: 1, $numeric: true }).find())
// destaques.value = destaques.value.filter(x=>!x._file?.includes("_dir.md"))
console.log('destaques:', destaques.value)


const { data: about } = await useAsyncData('about', () => queryContent().where({ _file: 'about.md' }).findOne())
console.log("about", about.value);

const { data: services } = await useAsyncData('services', () => queryContent('services').find())
services.value = services.value.filter(x => !x._file?.includes("_dir.md"))

const { data: portfolio } = await useAsyncData('portfolio', () => queryContent('portfolio').find())
portfolio.value = portfolio.value.filter(x => !x._file?.includes("_dir.md"))


// const { data: contact } = await useAsyncData('contact', () => queryContent('contact').find())
// contact.value = contact.value.filter(x => !x._file?.includes("_dir.md"))





</script>
<template>
 
  <div class="container  mt-3 slg:w-[81%]">
    <Breadcrumbs />
  </div>
  <section id="" class="py-2 lg:py-2">
    
    <div class="container " v-if="data[0]?.imageposition == 'hide'">
      <div class="gap-6 _items-center ">
          <h2 class="text-3xl font-medium text-default-950 mt-0 text-left wml-[93px]">{{ data[0]?.title }}</h2>
          <!-- <p class="text-base mt-1"> -->
            <ContentRenderer :value="data[0]" />
            <!-- {{data[0]?.description}} -->
          <!-- </p> -->
      </div>
    </div> 



    <div class="container" v-if="data[0]?.imageposition == 'top'">
      <div class="mb-5" v-if="!data[0]?.images[1]">
        <div v-for="img in data[0]?.images" :key="img" class="mb-5">
          <img :src="img" class="object-cover w-full max-h-[400px] rounded-xl mx-auto" alt="" />
        </div>
      </div>
      <div v-else class="grid lg:grid-cols-2 gap-6 _items-center ">
        <div v-for="img in data[0]?.images" :key="img" class="mb-5">
          <img :src="img" class="object-cover h-[400px] max-h-[400px] rounded-xl mx-auto" alt="" />
        </div>
      </div>
      <div class="gap-6 _items-center ">
        <div class="">
          <h2 class="text-4xl font-medium text-default-950 mt-0">{{ data[0]?.title }}</h2>
          <!-- <p class="text-base mt-4"> -->
            <ContentRenderer :value="data[0]" />
            <!-- {{data[0]?.description}} -->
          <!-- </p> -->
        </div>
      </div>
    </div>



    <div v-if="data[0]?.imageposition == 'side'" class="container">
      <div class="grid lg:grid-cols-2 gap-6 _items-center ">
        <!-- {{ data }} -->
        <div>
          <div v-for="img in data[0]?.images" :key="img" class="mb-5">
            <img :src="img" class="object-cover w-full rounded-xl mx-auto" alt="" />
          </div>
        </div>
        <div>
          <h2 class="text-4xl font-medium text-default-950 mt-0">{{ data[0]?.title }}</h2>
          <p class="text-base mt-4">
            <ContentRenderer :value="data[0]" />
          </p>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script setup lang="ts">

import Breadcrumbs from '~/components/Breadcrumbs.vue';

const route = useRoute()
const path = ref(route.params.path.join('/'))
const { data: data } = await useAsyncData('data', () => queryContent(([...route.params.path] || []).join('/')).find())
console.log('data...>', data.value);

</script>
<style>
ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  margin: 5px 0;
}
</style>
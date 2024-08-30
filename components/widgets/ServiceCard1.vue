<template>


<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="object-cover h-48 w-96" :src="service.images[0]" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ service.title }}</div>
    <p class="text-gray-400 text-base">
      {{ service.description }}
    </p>
    <a
      :href="service._path"
      class="mt-4 inline-flex items-center justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
      >Saber mais
      <ArrowUpRightIcon class="h-6 w-6" />
    </a>
  </div>
  
  <!-- <div class="px-6 pt-4 pb-2">
    <span 
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      v-for="tag in service.tags">
      {{ tag }}
    </span>
  </div> -->
</div>


<!-- <a href="#" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src="service.image" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ service.title }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ service.desc }}</p>
    </div>
</a> -->






  <!-- <div class="group" :class="customClass">
    <div class="sm:p-10 p-8">
     
      <h2 class="text-2xl text-default-950 font-medium mb-4 mt-4">{{ service.title }}</h2>
      <p class="text-base mb-6">{{ service.desc }}</p>
       <a :href="'agency-1/services?id='+service.id" class="text-default-950 text-lg"
            >Leia mais
        <MoveRightIcon
          class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
        />
      </a>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'
import { ArrowUpRightIcon } from 'lucide-vue-next'
import type { PropType } from 'vue'
import type { ServiceType } from '@/types/landing'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  },
  customClass: String
})
</script>

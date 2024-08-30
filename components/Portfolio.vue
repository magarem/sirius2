<template>
  <section id="portfolio" class="py-20">
    <div class="container">
      <div class="flex items-end justify-between _mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <!-- <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Services</span
          > -->
          
          <h2 class="text-4xl font-medium capitalize text-default-950 my-5 text-left">{{info.title}}</h2>
          <p class="text-base">
            {{info.desc}}
          </p>
        </div>
      </div>
      <div class="">
        <div class="mb-5">
          <!-- <h2 class="text-4xl font-medium text-default-950">{{ info.title }}</h2> -->

          <div class="filters-group-wrap text-center">
            <div class="filters-group">
              <div class="filter-options flex list-none flex-wrap justify-center gap-4">
               
                <router-link
                  to=""
                  :class="selectedCategory === 'all' ? 'active' : ''"
                  @click="filterImages('all')"
                >
                  Todos
                </router-link>
                <router-link
                  v-for="w in CatUniq" :key="w"
                  to=""
                  class="capitalize"
                  :class="selectedCategory === w ? 'active' : ''"
                  @click="filterImages(w)"
                  >{{ w }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="gallery-wrapper" class="flex items-center flex-wrap">
        <div v-for="(item, idx) in work" :key="idx" class="picture-item w-full p-3 xl:w-1/3">
          <div class="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-1 w-full">
            <div class="relative overflow-hidden rounded-lg">
              <img
                class="transition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                :src="item.images[0]"
                alt=""
                loading="lazy"
                :width="640"
                :height="805"
              />
              <div _class="absolute inset-0">
                <div class="h-full w-full rounded bg-black/10">
                  <div class="flex h-full items-end p-4">
                    <div class="overflow-hidden">
                      <p class="mb-2 font-medium text-white">{{ item.date }}</p>
                      <h5 class="mb-2 text-3xl font-medium text-white">
                        {{ item.title }}
                      </h5>
                      <p
                        class="mb-3 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal"
                      >
                        {{ item.description }}
                      </p>
                      
                      <a :href="item._path" class="text-default-950 text-lg"
            >Leia mais
        <MoveRightIcon
          class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
        />
      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'
import { ref } from 'vue'
// import data from "@/data.json"

import type { WorkType } from '@/types/landing'

const props = defineProps({
  info: {
    type: Object as PropType<any>,
    required: true
  },
  items: {
    type: Array as PropType<any[]>,
    required: true
  }
})
const workData: WorkType[] = props.items

let work = ref<WorkType[]>(props.items)
let selectedCategory = ref<string>('all')

let CatUniq = ref<any[]>([...new Set(props.items.map(x=>x.category))]) 

const filterImages = (category: string) => {
  selectedCategory.value = category
  setTimeout(() => {
    work.value =
      category === 'all' ? workData : workData.filter((album) => album.category?.includes(category))
  }, 300)
}


</script>

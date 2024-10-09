<template>
  <section id="portfolio" class="py-0">
    <div class="container_  text-slate-600 dark:text-slate-300">
      <div class="flex items-end justify-between -mb-4">
        <div class="max-w-2xl _mx-auto _text-center">
          <h2 class="text-4xl font-medium capitalize  my-0 text-left ml-4">
            {{info?.title}}
          </h2>
          <p v-if="info?.desc" class="text-base ml-4 mt-1">
            {{info?.desc}}
          </p>
        </div>
      </div>
      <div class="">
        <div class="mb-5">
          <!-- <h2 class="text-4xl font-medium text-default-950">{{ info.title }}</h2> -->
          <div v-if="false" class="filters-group-wrap text-center">
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
        <div v-for="(item, idx) in work" :key="idx" class="picture-item w-full p-3 xl:w-1/3 pph-[400px]">
          <div v-if="idx<(info?.limit||10000)" class="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-1 h-[340px]">
            <div class="relative overflow-hidden rounded-lg">
              <img
                v-if="info?.show?.includes('image')"
                class="transition mx-auto h-[200px] w-full object-cover object-top duration-500 group-hover:scale-105"
                :src="item.images[0]"
                alt=""
                loading="lazy"
                :width="640"
                :height="805"
              />
              <div _class="absolute inset-0">
                <div class="h-full w-full rounded _bg-black/10">
                  <div class="flex h-full items-end px-3 py-2">
                    <div class="overflow-hidden">
                      <p class="mb-2 font-medium text-white">{{ item.date }}</p>
                      <h5 v-if="info?.show?.includes('title')" class="mb-2 text-1xl font-medium">
                      
                        <nuxt-link :external="buildMode=='generate'" :to="item._path.replace('.md','')" class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize">
                          {{ item.title }}
                        </nuxt-link>

                      </h5>
                      <p v-if="info?.show?.includes('description')"
                        class="mb-3 truncate whitespace-nowrap text-base md:whitespace-normal"
                      >
                        {{ item.description.substring(0, item.description.indexOf('.') + 1)}}
                      </p>
                      
                      <!-- <a :href="item._path" class="text-default-950 text-sm"
                            >Leia mais
                        <MoveRightIcon
                          class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                        />
                      </a> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   

      <div v-if="false" id="gallery-wrapper" class="flex items-center flex-wrap">
        <div v-for="(item, idx) in work" :key="idx" class="picture-item w-full p-3 xl:w-1/3">
          <div v-if="idx<(info?.limit||10000)" class="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-1 max-h-[370px]">
            <div class="relative overflow-hidden rounded-lg">
              <img
                class="transition mx-auto max-h-[200px] w-full object-cover object-top duration-500 group-hover:scale-105"
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
                      <h5 v-if="info?.show?.includes('title')" class="mb-2 text-1xl font-medium text-white">
                        <a :href="item._path" class="text-lg ">
                          {{ item.title }}
                        </a>
                      </h5>
                      <p v-if="info?.show?.includes('description')"
                        class="mb-3 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal"
                      >
                        {{ item.description.substring(0, item.description.indexOf('.') + 1)}}
                      </p>
                      
                      <!-- <a :href="item._path" class="text-default-950 text-sm"
                            >Leia mais
                        <MoveRightIcon
                          class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
                        />
                      </a> -->
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
const config = useRuntimeConfig();
const buildMode = config.public.buildMode;
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

// if (!props.info.limit)  
const workData: WorkType[] = props.items

let work = ref<WorkType[]>(props.items)
let selectedCategory = ref<string>('all')

let CatUniq = ref<any[]>([...new Set(props.items?.map(x=>x.category))]) 

const filterImages = (category: string) => {
  selectedCategory.value = category
  setTimeout(() => {
    work.value =
      category === 'all' ? workData : workData.filter((album) => album.category?.includes(category))
  }, 300)
}


</script>
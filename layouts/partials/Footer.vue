<template>
  <footer id="footer">
    <div class="border-y border-default-200">
      <div class="container py-20">
        <div class="grid grid-cols-4 gap-1">
          <div class="_bg-slate-700 p-3">
            <h5 class="xl:text-xl lg:text-lg font-medium text-default-800 mb-4">{{ data.logo.name }}</h5>
            <p>{{ data.logo.slogan }}</p>
          </div>
          <div class="_bg-slate-700 p-3">
            <h5 class="xl:text-xl lg:text-lg font-medium text-default-800 mb-4">Seções</h5>
            <div _class="flex flex-col gap-3">
              <ul class="">
                <li class="ml-5" v-for="item in data.navbar" :key="item.label">
                  <a :href="item.link"
                    class="text-base text-default-700 hover:text-default-950 transition-all">{{ item.label }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="_bg-slate-700 p-3">
            <ul class="flex flex-col gap-3">
              <h5 class="xl:text-xl lg:text-lg font-medium text-default-800 mb-4">Social Media</h5>
              <div class="space-y-3">
                <!-- <a href="javascript:void(0);" class="flex items-center gap-5 group" v-for="item in data.socialmidias" :key="item.midia"> -->
              <div v-for="item in data.socialmidias" :key="item.midia">
                  <div 
                  class="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  <a :href="item.link">
                    <FacebookIcon v-if="item.midia == 'facebook'" class="h-5 w-5" />
                    <InstagramIcon v-if="item.midia == 'instagram'" class="h-5 w-5" />
                    <TwitterIcon v-if="item.midia == 'twitter'" class="h-5 w-5" />
                    <LinkedinIcon v-if="item.midia == 'linkedin'" class="h-5 w-5" />
                  </a>
                </div>
                {{ item.link }}
              </div>
                <h5 class="text-base font-medium text-default-800"></h5>


                <!-- </a> -->


              </div>
            </ul>
          </div>
          <div class="_bg-slate-700 p-3">
            <h5 class="xl:text-xl lg:text-lg font-medium text-default-800 mb-4">Contato</h5>
            <ul _class="flex flex-col gap-3 ">
              <li v-for="item in Object.entries(data.contact)" :key="item[0]">
                <div _class="container mx-auto p-1 grid md:grid-cols-2 gap-3" v-if="item[1].length > 10">
                  <p class="text-base text-default-700 hover:text-default-950 transition-all">{{ item[0] }}: {{ item[1] }}
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4">
      <div
        class="container flex flex-wrap justify-center items-center h-full md:justify-between text-center md:text-start">
        <p class="text-base text-default-900">
          {{ year }}
          {{ data.copyright }}
        </p>
        <!-- <p class="text-base">
            <a href="#">Terms Conditions & Policy</a>
          </p> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
//   import data from "@/data.json"
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

import {
  MoveRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon
} from 'lucide-vue-next'
const year = new Date().getFullYear()

defineProps({
  data: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>
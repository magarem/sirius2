
<template>
  <footer>
    <div class="border-y border-default-200 text-slate-500 dark:text-default-950">
      <div class="container py-20">
        <div class="grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16">
          <div class="xl:col-span-2 md:col-span-3">
            <div>
              <a href="#">
                {{ data.logo.name }}
                <!-- <img :src="logoDark" alt="logo" class="h-10 flex dark:hidden" />
                <img :src="logoLight" alt="logo" class="h-10 hidden dark:flex" /> -->
              </a>
              <p class="text-base mt-6">
                {{ data.logo.footer }}
              </p>
              <!--form class="space-y-2 mt-6">
                <div class="relative">
                  <input
                    type="email"
                    id="subcribe"
                    class="py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100 border-default-200 focus:ring-0 focus:border-default-200"
                    placeholder="Email"
                    name="email"
                  />
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all hover:bg-primary hover:text-white"
                  >
                    <MoveRightIcon class="h-6 w-6" />
                  </button>
                </div>
              </form-->
            </div>
          </div>

          <div class="">
            <h5 class="xl:text-xl lg:text-lg font-medium  mb-4">Navegação</h5>
            <ul class="flex flex-col gap-3">
             

              <li v-for="(link, idx) in data.navbar" :key="link.name">
                <a class="text-base hover:text-default-950 transition-all" :href="`#${link.link}`">{{ link.label }} </a>
              </li>



            </ul>
          </div>

          <div class="">
            <ul class="flex flex-col gap-3">
              <h5 class="xl:text-xl lg:text-lg font-medium  mb-4">Social Media</h5>
              <div class="space-y-3">
                <a v-if="data.socialmidias.facebook" :href="data.socialmidias.facebook" class="flex items-center gap-5 group">
                  <div
                    class="h-10 w-10 inline-flex items-center justify-center border border-default-300  rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                  >
                    <FacebookIcon class="h-5 w-5" />
                  </div>
                  <h5 class="text-base font-medium ">Facebook</h5>
                </a>

                <a v-if="data.socialmidias.instagram" :href="data.socialmidias.instagram" class="flex items-center gap-5 group">
                  <div
                    class="h-10 w-10 inline-flex items-center justify-center border border-default-300  rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                  >
                    <InstagramIcon class="h-5 w-5" />
                  </div>
                  <h5 class="text-base font-medium ">Instagram</h5>
                </a>

                <a v-if="data.socialmidias.twitter" :href="data.socialmidias.twitter" class="flex items-center gap-5 group">
                  <div
                    class="h-10 w-10 inline-flex items-center justify-center border border-default-300  rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                  >
                    <TwitterIcon class="h-5 w-5" />
                  </div>
                  <h5 class="text-base font-medium ">Twitter</h5>
                </a>

                <a v-if="data.socialmidias.linkedin" :href="data.socialmidias.linkedin" class="flex items-center gap-5 group">
                  <div
                    class="h-10 w-10 inline-flex items-center justify-center border border-default-300  rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                  >
                    <LinkedinIcon class="h-5 w-5" />
                  </div>
                  <h5 class="text-base font-medium ">Linkedin</h5>
                </a>
              </div>
            </ul>
          </div>

          <div class="">
            <h5 class="xl:text-xl lg:text-lg font-medium  mb-4">Contato</h5>
            <ul class="flex flex-col gap-3">
              <li v-for="(item, idx) in Object.entries(data.contact)" :key="item[1]">
                <span class="text-base  hover:text-default-950 transition-all" :href="`#${item[0]}`">{{item[1].value}} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4">
      <div
        class="container flex flex-wrap justify-center items-center h-full md:justify-between text-center md:text-start"
      >
        <p class="text-base text-slate-500 dark:text-default-950">
          {{ year }}
          {{data.copyright}}
        </p>
        <!-- <p class="text-base">
          <a href="#">Terms Conditions & Policy</a>
        </p> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
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
<template>
  <!-- Main Navigation Menu -->
  <header
    id="navbar"
    class="inset-x-0 top-0 z-60 h-100 transition-all duration-500 py-4 flex items-center bg-cyan-950 dark:bg-cyan-950 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80"
    :class="menuPosition"
  >
  
    <div class=" text-slate-500 dark:text-default-950">
      <div class="flex items-center justify-between gap-4">
        <div class="shrink ml-5">
          
          <!-- Navbar Brand Logo -->
          <nuxt-link to="/">
            <span class="text-2xl">Sirius studio </span>
          </nuxt-link>
      
        </div>

      

        <div v-if="btnText" class="ms-auto shrink inline-flex gap-2">
          <nuxt-link :to="pageToEdit" class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500">
            <span class="hidden sm:block">Editar página</span>
          </nuxt-link>  
          <!-- <nuxt-link :to="savePage" class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500">
            <span class="hidden sm:block">Salvar</span>
          </nuxt-link> -->
          <button @click="$emit('savePage')">Save</button>
          <!-- <a
            :href="pageToEdit"
            class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500"
          > -->
            <!-- <component v-if="btnIcon" :is="btnIcon" class="h-4 w-4 fill-white/40" /> -->

            
          <!-- </a> -->
          <!-- Mobile Menu Toggle Button -->
          <button class="lg:hidden inline-block" data-hs-overlay="#mobile-menu">
            <MenuIcon class="w-7 h-7 text-default-600 hover:text-default-900" />
          </button>
        </div>
      </div>
    </div>
  </header>
  <BackToTop />
  
</template>

<script setup lang="ts">
import BackToTop from '@/layouts/partials/BackToTop.vue'

import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

import type { NavbarLinkType } from '@/types/layout'
import type { PropType } from 'vue'

// import { navbarLinkData } from '@/utilities/layout'
import { ChevronDownIcon, MenuIcon } from 'lucide-vue-next'
// import gumshoeMin from 'gumshoejs'
import { onMounted, type FunctionalComponent } from 'vue'

const route = useRoute()
const url = useRequestURL()
const config = useRuntimeConfig();
const buildMode = ref(config.public.buildMode);
const pageToEdit = ref('/adm/edit?page=' + route.path)
// if (process) {
//       console.log(window.location.href)
// }
defineProps({
  logo: {
    type: Object as PropType<any>,
    required: false
  },
  navbarLink: {
    type: Array as PropType<NavbarLinkType[]>,
    required: false
  },
  btnText: {
    type: String
  },
  btnIcon: {
    type: Function as PropType<FunctionalComponent>
  },
  menuPosition: {
    type: String,
    default: 'sticky'
  }
})

const currentRouteName = route.path

const initStickyNav = () => {
  const windowScroll = () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75) {
        navbar.classList.add('nav-sticky')
      } else {
        navbar.classList.remove('nav-sticky')
      }
    }
  }


  window.addEventListener('scroll', (ev) => {
    ev.preventDefault()
    windowScroll()
  })
}

const initNavLinkActive = () => {
  if (document.querySelector('.menu a')) {
    // gumshoeMin('.menu a', {
    //   offset: 80
    // })
  }
}

// Navbar Active Class
const initMobileNavLinkActive = () => {
  if (document.querySelector('#mobile-menu nav a')) {
    // gumshoeMin('#mobile-menu nav a', {
    //   offset: 80
    // })
  }
}


onMounted(() => {
  initNavLinkActive()
  initMobileNavLinkActive()
  initStickyNav()
})
</script>

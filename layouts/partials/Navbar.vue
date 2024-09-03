<template>
  <!-- Main Navigation Menu -->
  <header
    id="navbar"
    class="inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center bg-white dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80"
    :class="menuPosition"
  >
    <div class="container">
      <div class="flex items-center justify-between gap-4">
        <div class="shrink">
          <!-- Navbar Brand Logo -->
          <nuxt-link to="/">
            <span class="text-default-900 text-2xl">{{ logo.name }}</span><span class="ml-1 text-default-900 text-l/2">{{ logo.slogan }}</span>
            <!-- <img :src="logoDark" alt="logo" class="h-10 flex dark:hidden" /> -->
            <!-- <img :src="logoLight" alt="logo" class="h-10 hidden dark:flex" /> -->
          </nuxt-link>
        </div>

        <!-- Navigation Menu -->
        <ul class="menu lg:flex items-center justify-center hidden relative mx-auto grow">
          <li
            v-for="(link, idx) in navbarLink"
            :key="link.label"
            class="menu-item text-default-800 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary"
          >
            <a
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :href="`${link.link}`"
              >{{ link.label }}</a
            >
          </li>

          <!-- Dropdown Menu -->
          <!-- <li class="menu-item group">
            <div class="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
              <a
                class="hs-dropdown-toggle after:absolute group-hover:after:-bottom-16 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
                href="javascript:void(0)"
              >
                Landing
                <ChevronDownIcon class="w-4 h-4 ms-2"></ChevronDownIcon>
              </a>

              <div
                class="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-48 transition-[opacity,margin] mt-4 opacity-0 hidden z-10 bg-white shadow-lg rounded-lg border border-default-100 p-1.5 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1">
                  <li v-for="(item, idx) in navbarLinkData" :key="item.name">
                    <nuxt-link
                      v-if="item.path"
                      class="flex items-center text-sm font-medium text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/10 rounded"
                      :class="{ 'text-primary': item.path === currentRouteName }"
                      :to="item.path"
                      >{{ item.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </li> -->
        </ul>

        <div v-if="btnText" class="ms-auto shrink inline-flex gap-2">
          <a
            href="#"
            class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500"
          >
            <component v-if="btnIcon" :is="btnIcon" class="h-4 w-4 fill-white/40" />

            <span class="hidden sm:block">{{ btnText }}</span>
          </a>
          <!-- Mobile Menu Toggle Button -->
          <button class="lg:hidden inline-block" data-hs-overlay="#mobile-menu">
            <MenuIcon class="w-7 h-7 text-default-600 hover:text-default-900" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu (Sidebar Menu) -->
  <div
    id="mobile-menu"
    class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 bottom-0 left-0 transition-all transform h-screen max-w-[270px] w-full z-[61] border-r border-default-200 bg-white dark:bg-default-50"
    tabindex="-1"
  >
    <div
      class="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300"
    >
      <nuxt-link to="/">
        <img :src="logoDark" alt="logo" class="h-10 flex dark:hidden" />
        <img :src="logoLight" alt="logo" class="h-10 hidden dark:flex" />
      </nuxt-link>
    </div>
    <div class="h-[calc(100%-4rem)] overflow-y-auto">
      <nav class="hs-accordion-group p-4 w-full h-full flex flex-col flex-wrap">
        <ul class="space-y-1">
          <li
            v-for="(link, idx) in navbarLink"
            :key="link.name"
            class="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary"
          >
            <a class="block w-full py-2.5 px-4" :href="`#${link.id}`">{{ link.name }} </a>
          </li>

          <li class="hs-accordion" id="landing-accordion">
            <a
              class="hs-accordion-toggle hs-accordion-active:bg-default-400/10 py-2.5 px-4 flex items-center text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary"
              href="javascript:;"
            >
              Landing
              <ChevronDownIcon
                class="w-5 h-5 ms-auto hs-accordion-active:rotate-180 transition-all"
              ></ChevronDownIcon>
            </a>

            <div
              id="landing-accordion"
              class="hs-accordion-content w-full overflow-hidden transition-[height] hidden"
            >
              <ul class="pt-2 ps-2">
                <li v-for="(item, idx) in navbarLink" :key="item.name">
                  <nuxt-link
                    v-if="item.path"
                    class="flex items-center text-sm font-medium text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/10 rounded"
                    :class="{ 'text-primary': item.path === currentRouteName }"
                    :to="item.path"
                    >{{ item.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

import type { NavbarLinkType } from '@/types/layout'
import type { PropType } from 'vue'

// import { navbarLinkData } from '@/utilities/layout'

import gumshoeMin from 'gumshoejs'
import { onMounted, type FunctionalComponent } from 'vue'

const route = useRoute()

defineProps({
  logo: {
    type: Object as PropType<any>,
    required: true
  },
  navbarLink: {
    type: Array as PropType<NavbarLinkType[]>,
    required: true
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
    gumshoeMin('.menu a', {
      offset: 80
    })
  }
}

// Navbar Active Class
const initMobileNavLinkActive = () => {
  if (document.querySelector('#mobile-menu nav a')) {
    gumshoeMin('#mobile-menu nav a', {
      offset: 80
    })
  }
}

onMounted(() => {
  initNavLinkActive()
  initMobileNavLinkActive()
  initStickyNav()
})
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: '/js/script.js' }],
    },
  },
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt', "@nuxt/image", '@nuxt/content'],
  // content: {
  //   documentDriven: true
  // },
  // colorMode: {
  //   classSuffix: '',
  //   preference: 'light',
  //   fallback: 'light'
  // },
  plugins: ['@/plugins/preline.client.ts', '@/plugins/vue-final-modal.ts'],
  css: ['@/assets/css/style.css', 'vue-final-modal/style.css'],
  // ignore: ['pages/landings/**/components/*'],
 
  router: {
    options: {
      linkActiveClass: 'active'
    },
  },

  runtimeConfig: {
    public: {
      buildMode: process.env.BUILDMODE || 'build'
    },
  },
  pinia: {
    storesDirs: ['stores/**']
  },

  compatibilityDate: '2024-07-30',

  nitro: {
    devServer: {
      // My files are under src, if yours are in the root you can change this to ./
      watch: ['./components']
    }
  }
})
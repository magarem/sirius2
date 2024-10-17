<template>
  <Navbar :logo="info.logo" :navbar-link="info.navbar" btn-text="PDF" :btn-icon="DownloadCloudIcon" :menuPosition="admMode?'noSticky':'sticky'"/>
  <slot />
  <Footer :data="info" />
 <!-- <div class="sticky bottom-0 z-50 h-100 bg-black "><button @click="save();" type="button" class="mt-5 mb-5">Salvar</button></div> -->

  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup>
import { DownloadCloudIcon } from 'lucide-vue-next'
import info from '@/content/_info.json'
import AdmNavbar from '@/layouts/partials/AdmNavbar.vue'
import Navbar from '@/layouts/partials/Navbar.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
import { ModalsContainer } from 'vue-final-modal'

const admMode = true

const savePage = () => {
  alert()
}
</script>
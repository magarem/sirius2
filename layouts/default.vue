<template>
  <Navbar  :logo="info.logo" :navbar-link="info.navbar" btn-text="PDF" :btn-icon="DownloadCloudIcon" />
  <slot />
  <Footer  :data="info" />
  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup>
import { DownloadCloudIcon } from 'lucide-vue-next'
import info from '@/content/_info.json'
import Navbar from '@/layouts/partials/Navbar.vue'
import Footer from '@/layouts/partials/Footer.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'


</script>
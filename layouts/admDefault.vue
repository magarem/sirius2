<template>
  <admNavbar logo="Sírius Studio" :navbar-link="info.navbar" btn-text="PDF" :btn-icon="DownloadCloudIcon" />
  <slot />
  <client-only>
    <BackToTop />
  </client-only>
</template>

<script setup>
import { DownloadCloudIcon } from 'lucide-vue-next'
import info from '@/content/_info.json'
import AdmNavbar from '@/layouts/partials/AdmNavbar.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'

// const admMode = true

</script>
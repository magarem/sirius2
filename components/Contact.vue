<template>
  <a name="contact"></a>
  <section  class="lg:py-20 py-10">
    <div class="container">
      <div class="flex flex-wrap items-center justify-around gap-6">
        <div v-for="(item, idx) in data" :key="item.detail" class="text-center">
          <div
            class="h-20 w-20 rounded-md border border-default-200 text-default-950 bg-white/5 mx-auto flex items-center justify-center"
          >
            <PhoneIcon v-if="item.icon == 'PhoneIcon'" class="h-10 w-10" />
            <MailIcon v-if="item.icon == 'MailIcon'" class="h-10 w-10" />
            <LineChartIcon v-if="item.icon == 'LineChartIcon'" class="h-10 w-10" />
            <SaveIcon v-if="item.icon == 'SaveIcon'" class="h-10 w-10" />
          </div>
          <!-- <h4 class="text-xl font-medium text-default-950 mt-5">{{ item.name }}</h4> -->
          <!-- <p class="text-base text-default-800 mt-1">{{ item.value }}</p> -->
        </div>
      </div>
    </div>
 </section>
</template>

<script setup lang="ts">
import { contactData } from '~/utilities/common'
import {
  ComponentIcon,
  LayersIcon,
  LayoutGridIcon,
  LineChartIcon,
  MailIcon,
  PhoneIcon,
  SaveIcon
} from 'lucide-vue-next'

defineProps({
  data: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

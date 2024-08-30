<template>
  <section id="service" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <!-- <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Services</span
          > -->
          
          <h2 class="text-4xl font-medium capitalize text-default-950 my-4 text-left">{{info.title}}</h2>
          <p class="text-base">
            {{info.desc}}
          </p>
        </div>
      </div>

      <!-- <div
        class="gap-4 grid lg:grid-cols-3 grid-cols-1 items-center rounded-md overflow-hidden _bg-default-100 _dark:bg-default-50 divide-y lg:divide-y-0 lg:divide-x divide-default-200"
      > -->
      <div class="container mx-auto p-1 grid md:grid-cols-3 gap-3">
        <ServiceCard1
          v-for="(service, idx) in items"
          :service="service"
          :key="service.title"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import data from "@/data.json"
import ServiceCard1 from '~/components/widgets/ServiceCard1.vue'
defineProps({
  info: {
    type: Object as PropType<any>,
    required: true
  },
  items: {
    type: Array as PropType<any[]>,
    required: true
  }
})

</script>

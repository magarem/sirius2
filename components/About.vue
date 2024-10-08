
<template>
  <section id="about_" class="py-10 lg:py-7  ">
    <div class="container text-slate-300">
      <div class="border border-primary/10 bg-zinc-800 p-14">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl/tight font-medium">
             {{ data.title }} 
            </h2>
            <p class="mb-7 mt-4 text-base">
              {{ data.description }} 
            </p>
            <a
              :href="data._path"
              class="inline-flex items-center justify-center gap-2 bg-primary px-8 py-2 transition-all hover:bg-primary-700"
              >Entre em contato
              <MoveRightIcon class="h-6 w-6" />
            </a>
          </div>
          <div>
            <img :src="data.images[0]" alt="" class="object-scale-down mx-auto h-80" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveRightIcon } from 'lucide-vue-next'
defineProps({
  data: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

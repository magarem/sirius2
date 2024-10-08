<template>
  <div
    class="text-slate-500 dark:text-default-950 relative gap-28 m-auto flex overflow-hidden border border-default-200 py-6 bg-zinc-100 dark:bg-zinc-800"
    :class="customClass"
  >
    <div class="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full ">
      <div class="py-2" v-for="(item, idx) in marqeeItems" :key="`marquee-1-${item}`">
        <h2 class="text-4xl" :class="textClass">{{ item }}</h2>
      </div>
    </div>

    <div
      aria-hidden="true"
      class="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full"
    >
      <div class="py-2" v-for="(item, idx) in marqeeItems" :key="`marquee-2-${item}`">
        <h2 class="text-4xl" :class="textClass">{{ item }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  marqeeItems: {
    type: Array as PropType<string[]>,
    default: [
      'UI-UX Experience',
      'Web Development',
      'Digital Marketing',
      'Product Design',
      'Mobile Solutions'
    ]
  },
  customClass: String,
  textClass: String
})
</script>

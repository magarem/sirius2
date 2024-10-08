<template>
  <div class="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-1">
    <!-- Back to Top -->
    <button
      class="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[inset_0px_0px_12px_0px] shadow-primary/40 backdrop-blur-3xl transition-all duration-500"
      :class="{ 'translate-x-16': !isButtonVisible }"
      @click="backToTop"
    >
      <ChevronUpIcon class="h-4 w-4" />
    </button>

    <!-- Light/Dark Toggle -->
    <button class="z-20 rounded-lg bg-primary text-white" @click="toggleTheme">
      <span
        v-if="useTheme.theme === 'light'"
        class="flex h-9 w-9 items-center justify-center"
        id="light-theme"
      >
        <MoonIcon class="h-5 w-5" />
      </span>
      <span
        v-if="useTheme.theme === 'dark'"
        class="flex h-9 w-9 items-center justify-center"
        id="dark-theme"
      >
        <SunIcon class="h-5 w-5" />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/themes'
import { ChevronUpIcon, MoonIcon, SunIcon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

const useTheme = useThemeStore()
if (!useTheme.theme) {
  useTheme.theme = 'light'
}
const toggleTheme = () => {
  const theme = useTheme.theme == 'light' ? 'dark' : 'light'
  useTheme.setTheme(theme)
  const html = document.getElementsByTagName('html')[0]
  if (theme == 'light') {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
}

const recover = () => {
  const html = document.getElementsByTagName('html')[0]
  if (useTheme.theme == 'light') {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
}

const backToTop = (e: any) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let isButtonVisible = ref(false)

onMounted(() => {
  //localStorage.getItem("myCat")
  recover()
  window.addEventListener('scroll', () => {
    if (window.scrollY > 72) {
      isButtonVisible.value = true
    } else {
      isButtonVisible.value = false
    }
  })
})
</script>

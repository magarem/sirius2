import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useThemeStore = defineStore('theme_store', () => {
  const theme = useLocalStorage<'light' | 'dark'>('aeropage_nuxt_theme_store', 'light')

  const setTheme = (nTheme: 'light' | 'dark') => {
    theme.value = nTheme
  }

  return {
    theme,
    setTheme
  }
})

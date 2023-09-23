import { useStorage } from '@vueuse/core'

export default defineNuxtPlugin({
  name: 'theme',
  setup() {
    const scheme = usePreferredColorScheme()
    const theme = useStorage<'auto' | 'dark' | 'light'>('theme', 'auto')
    const themeMode = computed(() => (theme.value === 'auto' ? scheme.value : theme.value))
    const themeColor = computed(() => (themeMode.value === 'light' ? '#ffffff' : '#0c0c0d'))

    return {
      provide: { themeMode, theme, themeColor }
    }
  }
})

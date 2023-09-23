export default defineNuxtPlugin({
  name: 'setup',
  setup() {
    const { $lang, $themeColor, $themeMode } = useNuxtApp()

    useHead({
      htmlAttrs: { lang: () => $lang.value },
      // title: () => $t(`route.${useRoute().name as string}`),
      meta: [{ name: 'theme-color', content: () => $themeColor.value }],
      bodyAttrs: { class: () => $themeMode.value }
    })
  }
})

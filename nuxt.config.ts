export default defineNuxtConfig({
  modules: ['nuxt-icon', '@vueuse/nuxt', '@nuxtjs/robots'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/module.scss";'
        }
      }
    }
  },
})

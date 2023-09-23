export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/styles/main.scss'],
  devtools: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/module.scss";'
        }
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'theme-color', content: '#FFFFFF' }],
      title: 'Nuxt Kit'
    },
    layoutTransition: { name: 'main', mode: 'out-in' },
    pageTransition: { name: 'slide', mode: 'out-in' }
  }
})

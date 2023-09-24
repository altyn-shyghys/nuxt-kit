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
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.ts'
      },
      {
        code: 'ru',
        iso: 'ru',
        name: 'Русский',
        file: 'ru.ts'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locale',
    strategy: 'prefix_except_default',
    experimental: {
      jsTsFormatResource: true
    }
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',
    //   alwaysRedirect: true
    // }
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

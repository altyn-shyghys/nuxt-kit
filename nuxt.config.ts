export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  devtools: {
    enabled: false
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/module.scss";'
        }
      }
    }
  },
  colorMode: {
    fallback: 'dark',
    hid: 'theme-script',
    globalName: '__THEME__',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'theme'
  },
  imports: {
    dirs: ['./constants']
  },
  image: {
    inject: true,
    format: ['webp']
  },
  i18n: {
    vueI18n: './locale/i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    lazy: true,
    experimental: {
      jsTsFormatResource: true
    },
    langDir: './locale/lang',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.ts'
      },
      {
        code: 'kz',
        iso: 'kz-KZ',
        file: 'kz.ts'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.ts'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18nRed',
      redirectOn: 'root'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'theme-color', content: '#FFFFFF' }],
      title: 'Nuxt Kit',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap'
        }
      ]
    },
    layoutTransition: { name: 'main', mode: 'out-in' },
    pageTransition: { name: 'slide', mode: 'out-in' }
  }
})

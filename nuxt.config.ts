export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt'
  ],
  nitro: {
    compressPublicAssets: true
  },
  devtools: {
    enabled: false
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/module.scss" as *;'
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
      { code: 'en', name: 'English', iso: 'en', file: 'en.ts' },
      { code: 'kz', name: 'Қазақ', iso: 'kk', file: 'kz.ts' },
      { code: 'ru', name: 'Русский', iso: 'ru', file: 'ru.ts' },
      { code: 'uk', name: 'Українська', iso: 'uk', file: 'uk.ts' }
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

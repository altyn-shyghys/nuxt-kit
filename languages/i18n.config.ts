export default defineI18nConfig(() => ({
  legacy: false,
  // locale: 'en',
  locales: ['en', 'ru'],
  // defaultLocale: 'ru',
  // fallbackLocale: 'en',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18nRedirected',
    redirectOn: 'root',
    alwaysRedirect: true
  },
  messages: {
    en: {
      welcome: 'Welcome'
    },
    ru: {
      welcome: 'Добро пожаловать!'
    }
  }
}))

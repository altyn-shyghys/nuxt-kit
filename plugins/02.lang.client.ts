import { useStorage } from '@vueuse/core'
import langs from '@/languages/i18n.config'

export default defineNuxtPlugin({
  name: 'lang',
  setup() {
    const { language } = useNavigatorLanguage()
    const langHandler: string = language.value?.split('-')[0] || 'en'
    const lang = useStorage<string>('language', langHandler in langs ? langHandler : 'en')

    /**
     * Content handler that helps translate the application based on the selected language
     * @param key Key-value that contains a link to the content of the notification depending on the current language
     * @returns Version of the content in the current language
     */
    const t = (key: string): string =>
      key.split('.').reduce((o, i) => o[i] || key, langs[lang.value])

    return { provide: { lang, t } }
  }
})

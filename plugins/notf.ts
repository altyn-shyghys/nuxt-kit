import { useStorage } from '@vueuse/core'

export default defineNuxtPlugin({
  name: 'notf',
  parallel: true,
  setup() {
    const notf = ref<string>('')
    const vibroIsActive = useStorage<boolean>('vibro', false)
    let timeoutRef: NodeJS.Timeout | null = null
    const { vibrate, isSupported } = useVibrate({ pattern: [200, 100, 200] })

    const notfHandler = (notfCode: string): void => {
      notf.value = notfCode
      timeoutRef = setTimeout(() => (notf.value = ''), 5000)
      if (isSupported && vibroIsActive.value) {
        vibrate()
      }
    }

    /**
     * Application-wide notification handler
     * @param notfCode Key-value that contains a link to the content of the notification depending on the current language
     */
    const setNotf = (notfCode: string): void => {
      if (!notf.value.length) {
        notfHandler(notfCode)
      } else {
        clearInterval(timeoutRef!)
        notfHandler(notfCode)
      }
    }

    return { provide: { notf, setNotf, vibroIsActive } }
  }
})

export default defineNuxtPlugin({
  name: 'notf',
  setup() {
    const notf = ref<string>('')
    let timeoutRef: NodeJS.Timeout | null = null
    const notfLayoutMode = ref<'def' | 'main'>('def')

    const notfHandler = (notfCode: string): void => {
      notf.value = notfCode
      timeoutRef = setTimeout(() => (notf.value = ''), 5000)
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

    return { provide: { notf, setNotf, notfLayoutMode } }
  }
})

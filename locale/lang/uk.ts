export default defineI18nLocale(() => {
  return {
    ui: {
      emptyTip: 'Немає даних для відображення...',
      errorTip: 'Неможливо завантажити дані...',
      tableName: 'Назва',
      reload: 'Перезавантажити',
      close: 'Закрити',
      search: 'Пошук'
    },
    app: {
      offline: {
        title: "Здається, у вас немає з'єднання з інтернетом...",
        desc: 'Перевірте налаштування вашої мережі'
      }
    }
  }
})

export default defineI18nLocale(() => {
  return {
    ui: {
      emptyTip: 'Нет данных для отображения...',
      errorTip: 'Не удалось загрузить данные...',
      tableName: 'Название',
      reload: 'Перезагрузить',
      close: 'Закрыть'
    },
    app: {
      offline: {
        title: 'Кажется, у вас нет соединения с интернетом...',
        desc: 'Проверьте настройки вашей сети'
      }
    }
  }
})

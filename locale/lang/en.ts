export default defineI18nLocale(() => {
  return {
    ui: {
      emptyTip: 'No data to display...',
      errorTip: 'Failed to load data...',
      tableName: 'Table name',
      reload: 'Reload',
      close: 'Close',
      search: 'Search'
    },
    app: {
      offline: {
        title: "You don't seem to be connected to the internet...",
        desc: 'Check your network settings'
      }
    }
  }
})

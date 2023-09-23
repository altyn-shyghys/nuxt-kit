<script setup lang="ts">
// import { useStorage } from '@vueuse/core'
// const { locale } = useI18n()

// // const { locale } = useI18n()
// const lang = useStorage<string>('language', 'en')
// locale.value = lang.value as string

// watch(lang, (nLang) => {
//   locale.value = nLang
// })
// const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <!-- <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
        <NuxtLink :to="switchLocalePath('ru')">Ru</NuxtLink> -->
        <form>
          <select id="locale-select" v-model="$i18n.locale">
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </form>
        {{ $t('welcome') }}
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

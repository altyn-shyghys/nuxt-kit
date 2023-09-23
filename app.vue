<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => locales.value.filter((i) => i.code !== locale.value))
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <NuxtLink
          v-for="loc in availableLocales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          >{{ loc.name }}</NuxtLink
        >
        {{ $t('welcome') }}
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

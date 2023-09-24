<template>
  <UiSpace layout="col">
    <NuxtLink :to="localePath('/about')">{{ $t('about') }}</NuxtLink>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('ru')">RU</NuxtLink>
  </UiSpace>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
</script>

<style scoped lang="scss"></style>

<template>
  <div>
    <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped lang="scss"></style>

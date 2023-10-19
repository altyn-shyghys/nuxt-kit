<template>
  <UiSpace display="col" :block="custom ? undefined : 'def'" mode="center" :full="true">
    <UiIcon :name="icon" size="md" />
    <UiText type="h5" :text="message" />
  </UiSpace>
</template>

<script setup lang="ts">
defineProps<{ icon: string; message: string; custom?: boolean }>()
</script>

<style scoped lang="scss">
// --- //
</style>

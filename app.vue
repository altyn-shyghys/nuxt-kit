<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiToggle v-model="ch" label="Some" name="somee" />
    </UiSpace>
    <UiLine :dashed="true" />
  </UiSpace>
</template>

<script setup lang="ts">
const ch = ref(false)
</script>

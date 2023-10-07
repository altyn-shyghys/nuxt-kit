<script setup lang="ts">
const load = ref(false)

const some = () => {
  load.value = true
  setTimeout(() => (load.value = false), 2000)
}
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <!-- Some -->
      <CustomButton title="" :loading="load" :icon="ICON_INFO" name="Some" @trigger="some" />
      <CustomButton title="" mode="icon" :loading="load" :icon="ICON_INFO" @trigger="some" />
    </UiSpace>
  </UiSpace>
</template>

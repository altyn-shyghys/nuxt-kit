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
      <UiSpace display="col" pos="left">
        <UiText type="h1" text="Some Text Ex h1" />
        <UiText type="h2" text="Some Text Example h2" />
        <UiText type="h3" text="Some Text Example h3" />
        <UiText type="h4" text="Some Text Example h4" />
        <UiText type="p" text="Some Text Example p" />
        <UiText type="h5" text="Some Text Example h5" />
        <UiText text="Some Text Example none" />
        <UiText :gray="true" type="small" text="Some Text Example small" />
        <UiText type="label" text="Some Text Example lable" />
        <UiText type="h6" text="Some Text Example h6" />
        <CustomButton title="" :loading="load" :icon="ICON_INFO" name="Генератор" @trigger="some" />
        <CustomButton title="" mode="icon" :loading="load" :icon="ICON_INFO" @trigger="some" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

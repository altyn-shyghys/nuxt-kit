<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiButton title="" mode="icon" :icon="ICON_EMPTY" />
        <UiButton title="" :icon="ICON_EMPTY" name="Some text" />
        <UiInput v-model="v" name="aboba" label="Some text" placeholder="Some" />
        <UiSelect v-model="s" :options="some" :icon="ICON_ERROR_LOAD" width="10rem" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
const some = ref([
  'sdfdsff',
  'sdfsdfdsf',
  'sfsdfssd',
  'sdfsdf',
  'sdfdsf',
  'sdfdsf',
  'sdfdsd',
  'sdfsdfdsf',
  'sdfdsfsf',
  'sdfsfssdfd',
  'sdfdsfdfsf'
])
const s = ref(some.value[0])
const v = ref('')
</script>

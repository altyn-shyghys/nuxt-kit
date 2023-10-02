<script setup lang="ts">
// const model = ref('')
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiScroll direction="horizontal">
          <UiSpace display="row" gap="sm" :full="true">
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
          </UiSpace>
        </UiScroll>
        <UiScroll :height="50">
          <UiSpace display="col">
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
            <UiIcon name="ic:round-auto-awesome-mosaic" size="max" />
          </UiSpace>
        </UiScroll>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<template>
  <UiSpace display="col" mode="center" block="def" :full="true">
    <template v-if="type === 'empty'">
      <UiIcon :name="ICON_EMPTY" size="md" />
      <UiText text="ui.selectTip" />
    </template>
    <template v-if="type === 'loading'">
      <UiIcon :name="ICON_LOADING_DOTS" size="md" />
      <UiText text="ui.selectTip" />
    </template>
    <template v-if="type === 'error'">
      <UiIcon :name="ICON_EMPTY" size="md" />
      <UiText text="ui.selectTip" />
    </template>
  </UiSpace>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type: 'loading' | 'empty' | 'error' }>(), { type: 'loading' })
</script>

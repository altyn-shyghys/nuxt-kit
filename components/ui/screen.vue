<template>
  <UiSpace mode="center" block="def" :full="true" style="height: 100%">
    <UiSpace display="row" gap="sm" class="control">
      <template v-if="type === 'empty'">
        <UiIcon name="tabler:table-alias" size="md" />
        <UiText text="ui.emptyTip" />
      </template>
      <template v-else-if="type === 'loading'">
        <UiIcon :name="ICON_LOADING_DOTS" size="md" />
      </template>
      <template v-else-if="type === 'error'">
        <UiIcon name="tabler:table-down" size="md" />
        <UiText text="ui.errorTip" />
      </template>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'loading' | 'empty' | 'error' }>(), { type: 'loading' })
</script>

<style scoped lang="scss">
.control {
  max-width: 12rem;
  text-align: left;
}
</style>

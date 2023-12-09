<template>
  <USpace mode="center" block="def" full style="height: 100%">
    <USpace display="row" gap="sm" style="max-width: 12rem; text-align: left">
      <template v-if="type === 'empty'">
        <UIcon :name="ICON_EMPTY" size="md" />
        <UText :text="$t('ui.emptyTip')" />
      </template>
      <template v-else-if="type === 'loading'">
        <UIcon :name="ICON_LOADING_DOTS" size="md" />
      </template>
      <template v-else-if="type === 'error'">
        <UIcon name="tabler:table-down" size="md" />
        <UText :text="$t('ui.errorTip')" />
      </template>
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'loading' | 'empty' | 'error' }>(), { type: 'loading' })
</script>

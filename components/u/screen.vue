<template>
  <USpace mode="center" block="def" :full="true" style="height: 100%">
    <USpace display="row" gap="sm" class="control">
      <template v-if="type === 'empty'">
        <UIcon name="tabler:table-alias" size="md" />
        <UText text="U.emptyTip" />
      </template>
      <template v-else-if="type === 'loading'">
        <UIcon :name="ICON_LOADING_DOTS" size="md" />
      </template>
      <template v-else-if="type === 'error'">
        <UIcon name="tabler:table-down" size="md" />
        <UText text="U.errorTip" />
      </template>
    </USpace>
  </USpace>
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

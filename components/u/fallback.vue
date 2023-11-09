<template>
  <template v-if="type === 'table'">
    <USpace display="col" block="alt" :full="true">
      <USpace display="row" pos="between">
        <USpace display="row" gap="sm">
          <div class="fb" style="width: 3.125rem; height: 3.125rem"></div>
          <USpace display="col" gap="bit">
            <div class="fb" style="width: 5rem; height: 1rem"></div>
            <div class="fb" style="width: 2rem; height: 1rem"></div>
          </USpace>
        </USpace>
        <USpace display="row" class="options">
          <div v-for="(_, i) in 2" :key="i" class="fb" style="width: 2rem; height: 2rem"></div>
        </USpace>
      </USpace>
      <USpace display="col" gap="bit">
        <div v-for="(_, i) in 5" :key="i" class="fb" style="width: 100%; height: 2rem"></div>
      </USpace>
    </USpace>
  </template>
  <template v-if="type === 'scroll'">
    <USpace display="col" block="alt" :style="`height: ${height}`" mode="center">
      <UIcon :name="ICON_LOADING_CIRCLE" />
    </USpace>
  </template>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'table' | 'scroll'; height?: string }>(), {
  type: 'table',
  height: undefined
})
</script>

<style scoped lang="scss">
.fb {
  background-color: var(--fg-m);
  border-radius: var(--br-rad);
}
</style>

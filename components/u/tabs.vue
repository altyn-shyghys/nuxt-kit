<template>
  <USpace
    display="grid"
    gap="bit"
    class="tabs"
    :style="`grid-template-columns: repeat(${tabs.length}, 1fr)`"
  >
    <UButton
      v-for="tab in tabs"
      :key="tab.name"
      mode="tab"
      :title="$t(tab.name)"
      :active="modelValue === tab.name"
      :icon="tab.icon || undefined"
      @trigger="$emit('update:modelValue', tab.name)"
    />
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string; tabs: UTab[] }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<style scoped lang="scss">
.tabs {
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  padding: toRem(1);
}
</style>

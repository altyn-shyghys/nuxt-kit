<template>
  <USpace display="row" center gap="bit" class="badge">
    <UIcon v-if="icon" size="sm" :name="icon" />
    <div v-if="color" :style="`background-color: var(--${color})`" class="mark"></div>
    <UText gray :text="text" />
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ text: string; icon?: string; color?: 'red' | 'yesllow' | 'green' }>()
</script>

<style scoped lang="scss">
.badge {
  border: toRem(1) solid var(--br);
  border-radius: var(--br-rad);
  padding: toRem(5) var(--space-m);
}

.mark {
  width: toRem(16);
  height: toRem(16);
  border: toRem(1) solid var(--br);
  border-radius: toRem(5);
}
</style>

<template>
  <USpace display="row" center gap="bit" class="badge">
    <UIcon v-if="icon" size="sm" :name="icon" :style="color ? `color: var(--${color})` : ''" />
    <div v-if="mode === 'mark'" :style="`background-color: var(--${color})`" class="mark"></div>
    <UText gray :text="text" />
    <slot />
  </USpace>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    icon?: string
    mode?: 'icon' | 'mark'
    color?: 'red' | 'orange' | 'green'
  }>(),
  { mode: 'icon', icon: undefined, color: undefined }
)
</script>

<style scoped lang="scss">
.badge {
  border: toRem(1) solid var(--br);
  background-color: var(--fg-m);
  border-radius: var(--br-rad);
  min-height: toRem(28);
  padding: toRem(5) var(--space-m);
}

.mark {
  width: toRem(16);
  height: toRem(16);
  border: toRem(1) solid var(--br);
  border-radius: 50%;
}
</style>

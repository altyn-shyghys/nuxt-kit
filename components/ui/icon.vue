<template>
  <Icon :name="name" :class="[size]" />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    size?: 'min' | 'sm' | 'def' | 'logo' | 'md' | 'lg' | 'max' | 'full'
  }>(),
  { size: 'def' }
)
</script>

<style scoped lang="scss">
.icon {
  transition: color var(--tr), transform var(--tr), fill var(--tr);

  svg {
    width: 100%;
    height: 100%;
    fill: var(--txt-m);
  }

  &.min {
    min-width: toRem(16);
    width: toRem(16);
    height: toRem(16);
  }

  &.sm {
    min-width: toRem(20);
    width: toRem(20);
    height: toRem(20);
  }

  &.def {
    min-width: toRem(25);
    width: toRem(25);
    height: toRem(25);
  }

  &.logo {
    min-width: var(--ui-size);
    height: var(--ui-size);
  }

  &.md {
    min-width: toRem(50);
    height: toRem(50);
  }

  &.lg {
    min-width: toRem(80);
    height: toRem(80);
  }

  &.max {
    min-width: toRem(100);
    height: toRem(100);
  }

  &.full {
    min-width: 100%;
    height: 100%;
  }
}
</style>

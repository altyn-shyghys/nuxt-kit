<template><IconCSS :name="name" :size="size" :style="`min-width: ${size}`" /></template>

<script setup lang="ts">
type Size = 'sm' | 'def' | 'ui' | 'cb' | 'md' | 'lg' | 'max' | 'full'
const props = withDefaults(defineProps<{ name: string; size?: Size }>(), { size: 'def' })

const sizeConfig: Record<Size, string> = {
  sm: '1rem', // 16px
  def: '1.5rem', // 24px
  ui: 'var(--ui-size)', // see in 'assets/base.scss'
  cb: '2.5rem', // 40px
  md: '3.125rem', // 50px
  lg: '5rem', // 80px
  max: '6.25rem', // 100px
  full: '100%'
}

const size = sizeConfig[props.size]
</script>

<style scoped lang="scss">
span {
  color: var(--txt-m);
  will-change: transform;
  transition: transform var(--tr);
}
</style>

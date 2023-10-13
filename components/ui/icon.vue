<template><IconCSS :name="name" :size="size" /></template>

<script setup lang="ts">
type Size = 'sm' | 'def' | 'btn' | 'ui' | 'cb' | 'md' | 'lg' | 'max' | 'full'
const props = withDefaults(defineProps<{ name: string; size?: Size }>(), { size: 'def' })

const sizeConfig: Record<Size, string> = {
  sm: '1rem', // 16px
  btn: '1.25rem', // 20px
  def: '1.5rem', // 24px
  ui: 'var(--ui-size)', // see in 'assets/base.scss'
  cb: '2.5rem', // see in 'assets/base.scss'
  md: '3.125rem', // 50px
  lg: '5rem', // 80px
  max: '6.25rem', // 100px
  full: '100%'
}

const size = sizeConfig[props.size]
</script>

<style scoped lang="scss">
span {
  min-width: v-bind(size);
  color: var(--txt-m);
}
</style>

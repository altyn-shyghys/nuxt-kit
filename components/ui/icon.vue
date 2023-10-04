<template><IconCSS :name="name" :size="size" /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    size?: 'min' | 'sm' | 'def' | 'logo' | 'md' | 'lg' | 'max' | 'full'
  }>(),
  { size: 'def' }
)

const sizeConfig = {
  min: '1rem', // 16px
  sm: '1.25rem', // 20px
  def: '1.563rem', // 25px
  logo: 'var(--ui-size)', // see in 'assets/base.scss'
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

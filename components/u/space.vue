<template><Block /></template>

<script setup lang="ts">
type Gap = 'none' | 'bit' | 'sm' | 'base' | 'lg'

const props = withDefaults(
  defineProps<{
    type?: 'div' | 'section' | 'nav' | 'form'
    display?: 'row' | 'col' | 'grid'
    gap?: Gap
    pos?: 'between' | 'left'
    block?: 'def' | 'alt'
    layout?: 'container' | 'wrapper' | 'screen'
    mode?: 'center' | 'mob'
    full?: boolean
  }>(),
  {
    type: 'div',
    display: undefined,
    gap: 'base',
    pos: undefined,
    block: undefined,
    layout: undefined,
    mode: undefined
  }
)

const slots = defineSlots<{ default(): any }>()

const gapConfig: Record<Gap, string> = {
  none: '0',
  bit: '0.125rem', // 2px
  sm: 'var(--space-m)', // see in 'assets/base.scss'
  base: 'var(--space)', // see in 'assets/base.scss'
  lg: 'var(--space-l)' // see in 'assets/base.scss'
}

const Block = () =>
  h(
    props.type,
    {
      class: [props.display, props.pos, props.block, props.layout, props.mode],
      style: `${props.display ? `gap: ${gapConfig[props.gap]};` : ''}${
        props.full ? 'width: 100%;' : ''
      }`
    },
    slots.default()
  )
</script>

<style scoped lang="scss">
/* Display */

.row {
  display: flex;
  align-items: center;
}

.col {
  display: flex;
  text-align: left;
  flex-direction: column;
}

.grid {
  display: grid;
  gap: var(--space);
}

/* Pos */

.between {
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
}

.left {
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
}

/* Block */

@mixin block-styles {
  transition: opacity var(--tr);
  padding: var(--space);
  border-radius: var(--br-rad);
  border: toRem(1) solid var(--br);
}

.def {
  @include block-styles;
  background-color: var(--fg-m);
}

.alt {
  @include block-styles;
  background-color: var(--bg);
}

/* Layout */

.container {
  max-width: 80rem;
  margin: auto;
  padding: 0 2rem;

  @media (max-width: $lg) {
    padding: 0 1.5rem;
  }

  @media (max-width: $md) {
    padding: 0 1rem;
  }

  @media (max-width: $zf) {
    padding: 0 toRem(10);
  }
}

@mixin wrapper-styles {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
}

.wrapper {
  @include wrapper-styles;
  justify-content: space-between;
  text-align: left;
  padding: 4.5rem 0 2rem 0;
}

.screen {
  @include wrapper-styles;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  position: relative;
  padding: var(--space);
  overflow: scroll;
}

/* Mode */

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.mob {
  @media (max-width: $sm) {
    padding: 4.5rem 0 7.938rem 0;
  }
}
</style>

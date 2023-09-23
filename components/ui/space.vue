<template><Block /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'div' | 'section' | 'nav' | 'form'
    display?: 'row' | 'col' | 'grid'
    gap?: 'sm' | 'lg' | 'min' | 'base'
    pos?: 'between' | 'left'
    block?: 'def' | 'alt'
    layout?: 'container' | 'wrapper' | 'screen'
    center?: boolean
    full?: boolean
  }>(),
  {
    type: 'div',
    display: undefined,
    gap: 'base',
    pos: undefined,
    block: undefined,
    layout: undefined
  }
)

const slots = defineSlots<{ default(): any }>()

const Block = () =>
  h(
    props.type,
    {
      class: [
        props.display,
        props.gap,
        props.pos,
        props.block,
        props.layout,
        props.center ? 'center' : null,
        props.full ? 'full' : null
      ]
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

/* Gap */

.min {
  gap: 0;
}

.base {
  gap: var(--space);
}

.sm {
  gap: var(--space-m);
}

.lg {
  gap: var(--space-l);
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
  transition:
    var(--tr-fg),
    opacity var(--tr);
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

/* Container */

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

/* Center */

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Full */

.full {
  width: 100%;
}
</style>

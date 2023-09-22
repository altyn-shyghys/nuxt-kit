<template><Block /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'div' | 'section' | 'nav' | 'form'
    layout?: 'row' | 'col' | 'grid' | 'container' | 'wrapper' | 'alt-wrapper'
    gap?: 'sm' | 'def' | 'lg' | 'min'
    pos?: 'between' | 'left'
    center?: boolean
    block?: 'block' | 'alt-block'
    full?: boolean
  }>(),
  { type: 'div', layout: undefined, gap: 'def', pos: undefined, block: undefined }
)

const slots = defineSlots<{ default(): any }>()

const Block = () =>
  h(
    props.type,
    {
      class: [
        props.layout,
        props.gap,
        props.pos,
        props.center ? 'center' : null,
        props.block,
        props.full ? 'full' : null
      ]
    },
    slots.default()
  )
</script>

<style scoped lang="scss">
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

.min {
  gap: 0;
}

.def {
  gap: var(--space);
}

.sm {
  gap: var(--space-m);
}

.lg {
  gap: var(--space-l);
}

.full {
  width: 100%;
}

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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@mixin wp-styles {
  transition: var(--tr-fg), opacity var(--tr);
  padding: var(--space);
  border-radius: var(--br-rad);
  border: toRem(1) solid var(--br);
}

.block {
  @include wp-styles;
  background-color: var(--fg-m);
}

.alt-block {
  @include wp-styles;
  background-color: var(--bg);
}

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
  width: 100%;
  justify-content: space-between;
  text-align: left;
  padding: 4.5rem 0 2rem 0;
}

.alt-wrapper {
  @include wrapper-styles;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  position: relative;
  padding: var(--space);
  overflow: scroll;
}
</style>

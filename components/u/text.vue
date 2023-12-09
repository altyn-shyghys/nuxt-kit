<template><Text /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    type?: 'h1' | 'h2' | 'h3' | 'p' | 'small' | 'label' | 'span'
    for?: string
    gray?: boolean
  }>(),
  { type: 'small', for: undefined, options: undefined }
)

const Text = () =>
  h(props.type, { for: props.for, style: props.gray ? 'color: var(--txt-s)' : null }, props.text)
</script>

<style scoped lang="scss">
* {
  word-wrap: break-word;
  will-change: transform;
}

h1 {
  font-size: 3rem;
  letter-spacing: toRem(-1);

  @media (max-width: $md) {
    font-size: 2.5rem;
  }

  @media (max-width: $sm) {
    font-size: 2rem;
  }

  @media (max-width: $zf) {
    font-size: 1.5rem;
  }
}

h2 {
  font-size: 2rem;
  letter-spacing: toRem(-1);

  @media (max-width: $md) {
    font-size: 1.75rem;
  }
}

h3 {
  font-size: 1.4rem;

  @media (max-width: $sm) {
    font-size: 1.3rem;
  }

  @media (max-width: $zf) {
    font-size: 1rem;
  }
}

p,
span {
  @media (max-width: $mob) {
    font-size: 0.875rem;
  }
}

h1,
h2,
h3 {
  line-height: 1;
}

p,
small,
h6 {
  line-height: 1.2;
}

label,
small {
  font-size: small;
}

span {
  font-weight: bold;
}
</style>

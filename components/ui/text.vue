<template><Text /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'label'
    for?: string
    gray?: boolean
  }>(),
  { type: 'small', for: undefined }
)

const { t } = useI18n()
const Text = () =>
  h(props.type, { for: props.for, style: props.gray ? 'color: var(--txt-s)' : null }, t(props.text))
</script>

<style scoped lang="scss">
* {
  line-height: 1.2;
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
}

h2 {
  font-size: 2rem;
  letter-spacing: toRem(-1);

  @media (max-width: $md) {
    font-size: 1.75rem;
  }

  @media (max-width: $sm) {
    font-size: 1.5rem;
  }
}

h3 {
  font-size: 1.875rem;

  @media (max-width: $md) {
    font-size: 1.5rem;
  }

  @media (max-width: $sm) {
    font-size: 1.125rem;
  }
}

label,
small {
  font-size: small;
}
</style>

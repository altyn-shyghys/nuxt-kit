<template><Text /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'label'
    for?: string
  }>(),
  { type: 'small', for: undefined }
)

const { t } = useI18n()
const Text = () => h(props.type, { for: props.for }, t(props.text))
</script>

<style scoped lang="scss">
* {
  line-height: 1;
  word-wrap: break-word;
}

h1 {
  font-size: toRem(64);

  @media (max-width: $lg) {
    font-size: toRem(54);
  }

  @media (max-width: $md) {
    font-size: toRem(42);
  }

  @media (max-width: $sm) {
    font-size: toRem(32);
  }
}

h2 {
  font-size: toRem(48);

  @media (max-width: $lg) {
    font-size: toRem(40);
  }

  @media (max-width: $md) {
    font-size: toRem(32);
  }

  @media (max-width: $sm) {
    font-size: toRem(24);
  }
}

h3 {
  font-size: toRem(36);

  @media (max-width: $lg) {
    font-size: toRem(30);
  }

  @media (max-width: $md) {
    font-size: toRem(24);
  }

  @media (max-width: $sm) {
    font-size: toRem(18);
  }
}

h5,
label {
  font-size: toRem(13);
  font-weight: bold;
}
</style>

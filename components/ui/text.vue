<template><Text /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'label'
    mode?: 'lg' | 'md' | 'sm' | 'bg' | 'wp'
    for?: string
  }>(),
  { type: 'small', mode: undefined, for: undefined }
)

const { $t } = useNuxtApp()
const Text = () => h(props.type, { class: props.mode, for: props.for }, $t(props.text))
</script>

<style scoped lang="scss">
* {
  line-height: 1;
  word-wrap: break-word;
  transition: color var(--tr);
}

h1 {
  font-size: toRem(72);

  @media (max-width: $lg) {
    font-size: toRem(60);
  }

  @media (max-width: $md) {
    font-size: toRem(40);
  }
}

h2 {
  &.lg {
    font-size: toRem(48);

    @media (max-width: $lg) {
      font-size: toRem(36);
    }

    @media (max-width: $md) {
      font-size: toRem(30);
    }
  }

  &.md {
    font-size: toRem(39);

    @media (max-width: $lg) {
      font-size: toRem(30);
    }

    @media (max-width: $zf) {
      font-size: toRem(25);
    }
  }

  &.sm {
    font-size: toRem(30);

    @media (max-width: $lg) {
      font-size: toRem(24);
    }

    @media (max-width: $md) {
      font-size: toRem(18);
    }
  }
}

p {
  &.bg {
    font-size: toRem(20);

    @media (max-width: $sm) {
      font-weight: bold;
      font-size: toRem(16);
    }

    @media (max-width: $zf) {
      font-weight: normal;
    }
  }

  &.wp {
    font-size: toRem(18);

    @media (max-width: $md) {
      font-size: toRem(16);
    }
  }
}

small,
label {
  font-size: smaller;
  font-weight: bold;
  color: var(--txt-s);
}
</style>

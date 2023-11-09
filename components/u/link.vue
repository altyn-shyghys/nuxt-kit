<template>
  <NuxtLink :to="to" :class="[mode]" :target="global ? '_blank' : null" :title="$t(title)">
    <UIcon v-if="icon" :name="icon" :size="props.mode === 'page' ? 'U' : 'def'" />
    <UText v-if="title && mode !== 'icon'" type="h4" :text="title" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string
    icon?: string
    title: string
    global?: boolean
    mode?: 'hybrid' | 'text' | 'icon' | 'page' | 'index'
  }>(),
  { text: undefined, icon: undefined, mode: 'text' }
)
</script>

<style scoped lang="scss">
a {
  &,
  svg,
  &:visited {
    transition:
      filter var(--tr),
      transform var(--tr);
    color: var(--txt-m);
  }

  &:active {
    transform: scale(0.96);
  }
}

a.hybrid {
  display: flex;
  align-items: flex-end;
  gap: toRem(3);
  border-bottom: toRem(1.2) dashed var(--txt-m);
  padding-bottom: toRem(3);

  &,
  svg {
    color: var(--txt-m);
  }

  &:hover,
  &:focus {
    border-bottom-style: solid;
  }
}

a.text {
  text-decoration: underline dashed var(--txt-m) toRem(1);
  text-underline-offset: toRem(5);

  &:hover,
  &:focus {
    text-decoration-style: solid;
  }
}

a.icon {
  &:hover,
  &:focus {
    filter: drop-shadow(0 0 toRem(5) var(--m));
  }
}

a.page {
  display: flex;
  align-items: center;
  gap: toRem(5);
  font-size: 0.875rem;

  &.router-link-active {
    &,
    svg {
      color: var(--m);
    }

    &:hover,
    &:focus {
      text-decoration: underline solid var(--m) toRem(1);
    }
  }

  &:hover,
  &:focus {
    text-decoration: underline solid var(--txt-m) toRem(1);
    text-underline-offset: toRem(5);
  }

  $width: 1.5rem;
  @media (max-width: $sm) {
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    text-decoration: none !important;
    font-size: 0.5rem;
    max-width: $width;

    svg {
      min-width: $width !important;
      width: $width !important;
      height: $width !important;
    }

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 toRem(5) var(--m));
    }
  }
}

.index {
  display: flex;
  align-items: center;
  gap: toRem(5);
  max-width: var(--U-size);

  &:hover,
  &:focus {
    filter: drop-shadow(0 0 toRem(5) var(--m));
  }

  svg {
    min-width: 2rem !important;
    width: 2rem !important;
    height: 2rem !important;
  }
}
</style>

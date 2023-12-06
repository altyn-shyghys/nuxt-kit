<template>
  <NuxtLink :to="to" :class="[mode]" :target="global ? '_blank' : null" :title="title">
    <UIcon v-if="icon" :name="icon" size="def" />
    <UText v-if="title && mode !== 'icon'" type="span" :text="title" />
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
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
    font-size: 0.875rem;
  }

  &:active {
    transform: var(--scale);
  }
}

a.hybrid {
  display: flex;
  align-items: flex-end;
  gap: toRem(5);
  border-bottom: toRem(1.2) dashed var(--txt-m);
  padding-bottom: toRem(3);

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

  @media (max-width: $sm) {
    flex-direction: column;
    gap: toRem(3);
    justify-content: center;
    text-decoration: none !important;
    font-size: 0.5rem;
    max-width: 2rem;

    span {
      font-weight: normal;
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
  max-width: var(--ui-size);

  &:hover,
  &:focus {
    filter: drop-shadow(0 0 toRem(5) var(--m));
  }
}
</style>

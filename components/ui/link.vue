<template>
  <NuxtLink :to="to" :class="[mode]" :target="global ? '_blank' : null" :title="$t(title)">
    <UiIcon v-if="icon" :name="icon" :size="props.mode === 'page' ? 'ui' : 'def'" />
    <UiText v-if="title && mode !== 'icon'" type="h4" :text="title" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string
    icon?: string
    title: string
    global?: boolean
    mode?: 'hybrid' | 'text' | 'icon' | 'page'
  }>(),
  { text: undefined, icon: undefined, mode: 'text' }
)
</script>

<style scoped lang="scss">
a {
  &,
  span,
  &:visited {
    transition: filter var(--tr);
    color: var(--txt-m);
  }
}

a.hybrid {
  display: flex;
  align-items: flex-end;
  gap: toRem(3);
  border-bottom: toRem(1.2) dashed var(--txt-m);
  padding-bottom: toRem(3);

  &,
  span {
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

  &.router-link-active {
    &,
    span {
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
    gap: 3px;
    justify-content: center;
    text-decoration: none !important;

    h4 {
      font-size: 0.67rem;
    }

    span {
      min-width: 1.5rem !important;
      width: 1.5rem !important;
      height: 1.5rem !important;
    }

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 toRem(5) var(--m));
    }
  }
}
</style>

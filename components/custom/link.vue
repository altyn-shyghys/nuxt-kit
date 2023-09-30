<template>
  <NuxtLink :to="to" :class="['link', mode]" :target="global ? '_blank' : null" :title="$t(title)">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ to: string; title: string; global?: boolean; mode?: 'alt' | 'alt-icon' }>(),
  { mode: undefined }
)
</script>

<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  gap: var(--space-m);
  box-sizing: border-box;
  transition:
    filter var(--tr),
    width var(--tr);

  &,
  svg,
  &:visited {
    color: var(--txt-m);
  }

  h4 {
    word-wrap: none;
  }

  &:hover,
  &:focus {
    color: var(--m);
  }
}

@mixin link-styles {
  @include ui-styles;

  &:hover {
    color: var(--txt-m);
    border: toRem(3) solid var(--fg-m);
    background-color: var(--fg-m);
  }

  &:focus {
    border: toRem(3) solid var(--m);
  }

  &.router-link-active {
    background-color: var(--m);
    border: toRem(3) solid var(--m);
    color: var(--fg-m);

    &:hover,
    &:focus {
      background-color: var(--m-tp);
    }
  }
}

.alt {
  @include link-styles;
  border: toRem(3) solid var(--bg);
}

.alt-icon {
  @include link-styles;
  padding: 0;
  border: toRem(3) solid transparent;
  justify-content: center;
  width: var(--ui-size);
}
</style>

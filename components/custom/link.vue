<template>
  <NuxtLink :to="to" :class="[mode]" :target="global ? '_blank' : null" :title="$t(title)">
    <UiIcon v-if="icon" :name="icon" :size="mode === 'icon' ? 'ui' : 'sm'" />
    <UiText v-if="text" type="h4" :text="text" />
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string
    text?: string
    icon?: string
    title: string
    global?: boolean
    mode?: 'hybrid' | 'text' | 'icon'
  }>(),
  { text: undefined, icon: undefined, mode: 'text' }
)
</script>

<style scoped lang="scss">
a {
  &,
  span,
  &:visited {
    color: var(--txt-m);
  }
}

a.hybrid {
  display: flex;
  align-items: center;
  gap: toRem(3);
  border-bottom: toRem(1) dashed var(--m);
  padding-bottom: toRem(3);

  &,
  span {
    color: var(--m);
  }

  &:hover,
  &:focus {
    color: var(--m);
    border-bottom-style: solid;
  }
}

a.text {
  text-decoration: underline dashed var(--m) toRem(1);
  text-underline-offset: toRem(5);
  color: var(--m);

  &:hover,
  &:focus {
    text-decoration-style: solid;
  }
}

a.icon {
  span {
    
  }
  &:hover,
  &:focus {
    span {
      color: var(--m);
    }
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

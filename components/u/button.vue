<template>
  <button
    :disabled="disabled || loading"
    :class="{
      button: mode === 'button',
      icon: mode === 'icon',
      link: mode === 'link',
      min: mode === 'min',
      tab: mode === 'tab',
      action: state === 'action',
      active: active
    }"
    :title="title"
    @click.prevent="$emit('trigger')"
  >
    <USpace mode="center" style="position: relative; pointer-events: none; text-align: left">
      <UIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
      <USpace display="row" gap="bit" :style="loading ? `visibility: hidden` : null">
        <UIcon v-if="icon" :name="icon" :size="mode === 'min' || mini ? 'sm' : 'def'" />
        <UText v-if="title && mode !== 'icon'" type="span" :text="title" />
      </USpace>
    </USpace>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    mode?: 'button' | 'icon' | 'link' | 'min' | 'tab'
    disabled?: boolean
    state?: 'action'
    active?: boolean
    loading?: boolean
    icon?: string
    mini?: boolean
  }>(),
  { title: undefined, mode: 'button', icon: undefined, state: undefined }
)

defineEmits<{ (e: 'trigger'): void }>()
</script>

<style scoped lang="scss">
button {
  @include ui-styles;
  cursor: pointer;

  svg {
    pointer-events: none;
  }

  &:active {
    transform: var(--scale);
  }

  &:disabled {
    filter: grayscale(100);
    cursor: not-allowed !important;
  }
}

.button {
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);

  &,
  svg {
    color: var(--txt-m);
  }

  &:hover,
  &:focus {
    border: toRem(1) solid var(--m);
  }

  &.active {
    background-color: var(--m);

    &:hover,
    &:focus {
      box-shadow: 0 0 var(--space-m) var(--m);
    }
  }
}

.icon {
  background-color: transparent;
  padding: 0;
  color: var(--txt-m);
  height: auto;

  &:hover,
  &:focus {
    filter: drop-shadow(0 0 toRem(5) var(--m));
  }

  &.active {
    svg {
      color: var(--m);
    }
  }

  &.action {
    svg {
      color: var(--txt-s);
    }
  }
}

.link {
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  border-bottom: toRem(1.2) dashed var(--txt-m);
  padding-bottom: toRem(3);
  transition: transform var(--tr);

  .row {
    align-items: flex-end;
  }

  &,
  svg {
    color: var(--txt-m);
    height: auto !important;
  }

  &:hover,
  &:focus {
    border-bottom-style: solid;
  }
}

.min {
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  height: auto;

  &,
  svg {
    color: var(--m);
  }

  &:hover,
  &:focus {
    filter: drop-shadow(0 0 toRem(5) var(--m));
  }
}

.tab {
  background-color: var(--fg-m);
  border: toRem(1) solid var(--fg-m);

  &:hover,
  &:focus {
    border: toRem(1) solid var(--m);
  }

  &,
  svg {
    color: var(--txt-m);
  }

  &.active {
    background-color: var(--bg);

    &:hover,
    &:focus {
      box-shadow: 0 0 var(--space-m) var(--fg-m);
    }
  }
}
</style>

<template>
  <button
    :disabled="disabled || loading"
    :class="[mode, state]"
    :title="$t(title)"
    @click.prevent="$emit('trigger')"
  >
    <UiSpace mode="center" style="position: relative">
      <UiIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
      <UiSpace display="row" gap="sm" :style="loading ? `visibility: hidden` : null">
        <UiIcon v-if="icon" :size="mode === 'icon' ? 'ui' : 'def'" :name="icon" />
        <UiText v-if="title && mode !== 'icon'" type="h4" :text="title" />
      </UiSpace>
    </UiSpace>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    mode?: 'button' | 'icon'
    disabled?: boolean
    state?: 'active'
    loading?: boolean
    icon?: string
  }>(),
  { mode: 'button', icon: undefined, state: undefined }
)

defineEmits<{ (e: 'trigger'): void }>()
</script>

<style scoped lang="scss">
.button {
  @include ui-styles;
  cursor: pointer;
  background-color: var(--btn-bg);
  font-size: 0.875rem;

  &,
  svg {
    color: var(--fg-m);
  }

  svg:hover {
    filter: none;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 var(--space-m) var(--btn-bg);
  }

  &:active {
    transform: scale(0.96);
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
  @include ui-styles;
  background-color: transparent;
  padding: 0;
  color: var(--txt-m);
  cursor: pointer;

  &:hover,
  &:focus {
    filter: drop-shadow(0 0 toRem(5) var(--m));
  }

  svg {
    transition: filter var(--tr);
  }

  &:active {
    transform: scale(0.9);
  }

  &.active {
    &,
    svg {
      color: var(--m);
    }
  }
}

button:disabled {
  & {
    filter: brightness(0.5);
  }

  &,
  svg {
    cursor: not-allowed !important;
  }
}
</style>

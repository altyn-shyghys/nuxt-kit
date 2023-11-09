<template>
  <button
    :disabled="disabled || loading"
    :class="[mode, state]"
    :title="$t(title)"
    @click.prevent="$emit('trigger')"
  >
    <USpace mode="center" style="position: relative">
      <UIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
      <USpace display="row" gap="sm" :style="loading ? `visibility: hidden` : null">
        <UIcon v-if="icon" :size="mode === 'icon' ? 'ui' : 'def'" :name="icon" />
        <UText v-if="title && mode !== 'icon'" type="h4" :text="title" />
      </USpace>
    </USpace>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    mode?: 'button' | 'icon' | 'link'
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

  &:active {
    transform: scale(0.9);
  }
}

.link {
  @include ui-styles;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  gap: toRem(3);
  border-bottom: toRem(1.2) dashed var(--txt-m);
  padding-bottom: toRem(3);
  transition: transform var(--tr);

  .row {
    gap: toRem(3) !important;
    align-items: flex-end;
  }

  &,
  svg {
    color: var(--txt-m);
    height: auto !important;
  }

  svg {
    pointer-events: none;
  }

  &:active {
    transform: scale(0.96);
  }

  &:hover,
  &:focus {
    border-bottom-style: solid;
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

<template>
  <button
    :disabled="disabled || loading"
    :class="[mode, disabled || loading ? 'disabled' : '', active ? 'active' : '']"
    :title="$t(title)"
    @click.prevent="$emit('trigger')"
  >
    <UiBlock v-if="loading" :center="true" class="loading">
      <UiIcon name="eos-icons:three-dots-loading" />
    </UiBlock>
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    mode?: 'button' | 'icon'
    disabled?: boolean
    active?: boolean
    loading?: boolean
  }>(),
  { mode: 'button' }
)

defineEmits<{ (e: 'trigger'): void }>()
</script>

<style scoped lang="scss">
@mixin button-styles {
  @include ui-styles;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--tr-fg), filter 0.5s ease;
  background-color: var(--btn-bg-m);
  gap: var(--space-m);
  color: var(--fg-m) !important;
  border: toRem(3) solid var(--btn-bg-m);

  svg {
    fill: var(--fg-m);
  }

  &:hover,
  &:focus {
    border: toRem(3) solid var(--m);
  }

  h4 {
    @media (max-width: $zf) {
      font-size: 0.8rem;
    }
  }
}

.button {
  @include button-styles;
}

.icon {
  @include button-styles;
  padding: 0;
  width: var(--ui-size);
  min-width: var(--ui-size);
}

.disabled {
  filter: brightness(0.5);
  justify-content: center !important;

  &,
  svg {
    cursor: not-allowed;
  }
}

.active {
  background-color: var(--m);
  border: toRem(3) solid var(--m);
  color: var(--txt-m);

  &:hover,
  &:focus {
    background-color: var(--m-tp);
  }
}

.loading {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--br-rad);
  background-color: var(--btn-bg-m);

  .icon {
    border: 0;
  }
}
</style>

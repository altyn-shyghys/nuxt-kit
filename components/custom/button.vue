<template>
  <button
    :disabled="disabled || loading"
    :class="[mode, disabled || loading ? 'disabled' : '', active ? 'active' : '']"
    :title="$t(title)"
    @click.prevent="$emit('trigger')"
  >
    <UiSpace :center="true" style="position: relative">
      <UiIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
      <UiSpace display="row" gap="sm" :style="loading ? `visibility: hidden` : null">
        <UiIcon v-if="icon" :size="mode === 'icon' ? 'ui' : 'btn'" :name="icon" />
        <UiText v-if="name" type="h4" :text="name" />
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
    active?: boolean
    loading?: boolean
    icon?: string
    name?: string
  }>(),
  { mode: 'button', icon: undefined, name: undefined }
)

defineEmits<{ (e: 'trigger'): void }>()
</script>

<style scoped lang="scss">
.button {
  @include ui-styles;
  cursor: pointer;
  background-color: var(--btn-bg-m);

  &,
  span {
    color: var(--fg-m);
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 var(--space-m) var(--btn-bg-m);
  }

  h4 {
    @media (max-width: $mob) {
      font-size: 0.875rem;
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
    span {
      color: var(--m);
    }
  }

  span {
    transition:
      filter var(--tr),
      color var(--tr);
  }
}

.disabled {
  filter: brightness(0.5);
  justify-content: center !important;

  &,
  span {
    cursor: not-allowed;
  }
}

.active {
  background-color: var(--m);
  border: toRem(2) solid var(--m);

  &,
  span {
    color: var(--txt-m);
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 var(--space-m) var(--m);
  }
}
</style>

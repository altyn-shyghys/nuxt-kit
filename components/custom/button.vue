<template>
  <button
    :disabled="disabled || loading"
    :class="[mode, disabled || loading ? 'disabled' : '', active ? 'active' : '']"
    :title="$t(title)"
    @click.prevent="$emit('trigger')"
  >
    <UiSpace :center="true" style="position: relative">
      <UiIcon v-if="loading" :name="ICON_CIRCLE_LOADING" style="position: absolute" />
      <UiSpace display="row" gap="sm" :class="{ hide: loading }">
        <UiIcon v-if="icon" :size="mode === 'icon' ? 'def' : 'btn'" :name="icon" />
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
  color: var(--fg-m);
  border: toRem(3) solid var(--btn-bg-m);

  span {
    color: var(--fg-m);
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
    padding: 0.25rem;
  }
}

.hide {
  visibility: hidden;
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
</style>

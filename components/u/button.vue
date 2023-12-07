<template>
  <button
    :disabled="disabled || loading"
    :class="[mode, state]"
    :title="title"
    @click.prevent="$emit('trigger')"
  >
    <USpace mode="center" style="position: relative; pointer-events: none">
      <UIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
      <USpace display="row" gap="bit" :style="loading ? `visibility: hidden` : null">
        <UIcon v-if="icon" :name="icon" />
        <UText v-if="title && mode !== 'icon'" type="span" :text="title" />
      </USpace>
    </USpace>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    mode?: 'button' | 'icon' | 'link' | 'min'
    disabled?: boolean
    state?: 'active' | 'action'
    loading?: boolean
    icon?: string
  }>(),
  { mode: 'button', icon: undefined, state: undefined }
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
    filter: brightness(0.5);
    cursor: not-allowed !important;
  }
}

.button {
  background-color: var(--btn-bg);

  &,
  svg {
    color: var(--fg-m);
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 var(--space-m) var(--btn-bg);
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
</style>

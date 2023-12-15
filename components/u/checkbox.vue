<template>
  <USpace display="row" gap="sm" style="position: relative" :class="{ disabled: disabled }">
    <input
      :id="name"
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <USpace block="def" class="box">
      <UIcon name="lucide:check" size="cb" />
    </USpace>
    <UText v-if="label" type="label" gray :for="name" :text="label" />
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label?: string; disabled?: boolean }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
.box {
  @include ui-styles;
  width: var(--ui-size);
  padding: 0;
  position: relative;

  svg {
    position: absolute;
    left: toRem(2);
    bottom: toRem(-2);
    opacity: 0;
    transition: all var(--tr);
    transform: translateY(toRem(20));
  }
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:checked + .box {
    svg {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover + .box,
  &:focus + .box {
    border-color: var(--m);
  }
}

.disabled {
  &,
  svg,
  input {
    cursor: not-allowed;
  }

  input:hover + .box,
  input:focus + .box {
    border-color: var(--br);
  }
}
</style>

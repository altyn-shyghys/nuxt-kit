<template>
  <UiSpace display="row" gap="sm" style="position: relative" :class="{ disabled: disabled }">
    <input
      :id="name"
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <UiSpace block="def" class="box">
      <UiIcon name="lucide:check" size="cb" />
    </UiSpace>
    <UiText type="label" :gray="true" :for="name" :text="label" />
  </UiSpace>
</template>

<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string; disabled?: boolean }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
.box {
  @include ui-styles;
  width: var(--ui-size);
  padding: 0;
  position: relative;

  span {
    position: absolute;
    left: toRem(2);
    bottom: toRem(-2);
    opacity: 0;
    transition: all 0.5s ease;
    transform: translateY(toRem(30));
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
    span {
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
    cursor: default;
  }

  input:hover + .box,
  input:focus + .box {
    border-color: var(--br);
  }
}
</style>

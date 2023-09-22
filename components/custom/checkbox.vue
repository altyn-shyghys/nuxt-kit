<template>
  <UiBlock layout="row" gap="sm" :class="{ checkbox: true, disabled: disabled }">
    <input
      :id="name"
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <UiBlock :center="true" block="block" class="box">
      <UiIcon name="lucide:check" size="md" />
    </UiBlock>
    <UiText type="label" :for="name" :text="label" />
  </UiBlock>
</template>

<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string; disabled?: boolean }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
.checkbox {
  position: relative;
}

.box {
  @include ui-styles;
  width: var(--ui-size);
  position: relative;
  padding: 0;
  display: inline-block;

  svg {
    width: toRem(50);
    display: inline-block;
    height: auto;
    position: absolute;
    left: toRem(1);
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
    svg {
      // animation: bounce 0.5s ease;
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

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(toRem(30));
  }
  60% {
    opacity: 1;
    transform: translateY(toRem(-5));
  }
  100% {
    transform: translateY(0);
  }
}
</style>

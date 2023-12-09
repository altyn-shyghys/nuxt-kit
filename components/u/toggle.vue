<template>
  <USpace display="row" pos="between" style="position: relative">
    <USpace display="col" gap="bit">
      <UText type="span" :text="label" />
      <UText type="label" :for="name" gray :text="desc" />
    </USpace>
    <input
      :id="name"
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <div class="toggler"></div>
  </USpace>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  modelValue: boolean
  label: string
  desc: string
  disabled?: boolean
}>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
input {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:hover + .toggler::before,
  &:focus + .toggler::before {
    box-shadow: 0 0 var(--space-m) var(--m);
  }

  &:checked + .toggler::before {
    transform: translateX(101%);
    background-color: var(--m);
  }
}

.toggler {
  display: flex;
  align-items: center;
  position: relative;
  height: var(--ui-size);
  border-radius: var(--space);
  width: calc(var(--ui-size) * 2);
  min-width: calc(var(--ui-size) * 2);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);

  &::before {
    content: '';
    position: absolute;
    left: -1%;
    height: var(--ui-size);
    border-radius: 100%;
    width: var(--ui-size);
    background-color: var(--txt-m);
    transition:
      transform var(--tr),
      box-shadow var(--tr),
      background-color var(--tr);
  }
}
</style>

<template>
  <UiSpace display="row" pos="between" style="position: relative">
    <UiSpace display="col" gap="bit">
      <UiText type="h4" :for="name" :text="label" />
      <UiText v-if="desc" :gray="true" :text="desc" />
    </UiSpace>
    <input
      :id="name"
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <div class="toggler"></div>
  </UiSpace>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  modelValue: boolean
  label: string
  desc?: string
  disabled?: boolean
}>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:hover + .toggler::before,
  &:focus + .toggler::before {
    box-shadow: 0 0 var(--space-m) var(--m);
  }

  &:checked + .toggler::before {
    transform: translateX(106%);
    background-color: var(--m);
  }
}

.toggler {
  display: flex;
  align-items: center;
  transition: justify-content var(--tr);
  height: var(--ui-size);
  border-radius: toRem(20);
  width: calc(var(--ui-size) * 2);
  min-width: calc(var(--ui-size) * 2);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);

  &::before {
    content: '';
    height: calc(var(--ui-size) - toRem(2));
    border-radius: 100%;
    width: calc(var(--ui-size) - toRem(2));
    background-color: var(--txt-m);
    transition:
      transform var(--tr),
      box-shadow var(--tr),
      background-color var(--tr);
  }
}
</style>

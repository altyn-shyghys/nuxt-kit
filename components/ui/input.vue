<template>
  <UiSpace display="col" gap="sm">
    <UiText type="label" :gray="true" :for="name" :text="label" />
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :maxlength="length"
      :placeholder="$t(placeholder)"
      autocomplete="on"
      :class="{ error: warn }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </UiSpace>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    type?: 'text' | 'email' | 'password'
    modelValue: string
    placeholder: string
    label: string
    length?: number
    warn?: boolean
  }>(),
  { type: 'text', length: 100 }
)

defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<style scoped lang="scss">
input {
  @include ui-styles;
  font-size: 0.875rem;
  background-color: var(--fg-m);
  color: var(--txt-m);
  border: toRem(1) solid var(--br);
  width: auto;

  &:focus,
  &:hover {
    border: toRem(1) solid var(--m);
  }
}

.error {
  & {
    border-color: var(--red);
    box-shadow: 0 0 var(--space-m) var(--red);
  }

  &:focus,
  &:hover {
    border-color: darkred;
  }
}
</style>

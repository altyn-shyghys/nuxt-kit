<template>
  <USpace display="col" gap="sm" full>
    <UText v-if="label" type="label" gray :for="name" :text="label" />
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :maxlength="length"
      :placeholder="placeholder"
      autocomplete="on"
      :class="{ error: warn }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </USpace>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    modelValue: string | number
    placeholder?: string
    type?: 'text' | 'email' | 'password' | 'datetime-local' | 'number' | 'date'
    label?: string
    length?: number
    warn?: boolean
  }>(),
  { type: 'text', placeholder: '', length: 100, label: undefined }
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
  width: 100%;

  &:focus,
  &:hover {
    border: toRem(1) solid var(--m);
  }
}

.error {
  border-color: var(--red);
  box-shadow: 0 0 var(--space-m) var(--red);

  &:focus,
  &:hover {
    border-color: darkred;
  }
}
</style>

<template>
  <UiSpace display="col" gap="sm">
    <UiText text="some" />
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :maxlength="length"
      :placeholder="$t(placeholder)"
      autocomplete="on"
      :class="{ error: warn && modelValue.length }"
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
    length?: number
    warn?: boolean
  }>(),
  { type: 'text', length: 300 }
)

defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<style scoped lang="scss">
input {
  @include ui-styles;
  background-color: var(--fg-m);
  color: var(--txt-m);
  border: toRem(1) solid var(--br);
  width: auto;

  &:focus,
  &:hover {
    border: toRem(1) solid var(--m);
  }

  @media (max-width: $zf) {
    font-size: 0.8rem;
  }
}

.error {
  &,
  &:focus,
  &:hover {
    border: toRem(1) solid red;
  }
}
</style>

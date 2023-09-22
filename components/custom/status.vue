<template>
  <UiBlock layout="col" gap="sm" class="checkbox">
    <UiText type="label" :for="name" :text="label" />
    <input
      :id="name"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <UiBlock layout="row" :center="true" gap="sm" block="block" class="box">
      <UiText :text="modelValue ? 'OK' : 'NOK'" />
      <UiText text="app.statusTip" />
    </UiBlock>
  </UiBlock>
</template>

<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
.checkbox {
  position: relative;
}

.box {
  @include ui-styles;
  width: 100%;
  position: relative;
  padding: 0;
  background-color: var(--red);
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:checked + .box {
    background-color: var(--green);
  }

  &:hover + .box,
  &:focus + .box {
    border-color: var(--m);
  }
}
</style>

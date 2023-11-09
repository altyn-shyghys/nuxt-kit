<template>
  <div style="position: relative">
    <input
      :id="name"
      type="checkbox"
      class="input"
      :disabled="disabled"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <UiText type="label" :gray="true" :for="name" :text="label" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string; disabled?: boolean }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
.input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.toggler {
  display: flex;
  width: 46px;
  height: 22px;
  background-color: #f1f1f1;
  border-radius: var(--br-rad);
  transition: var(--transition);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: var(--light-bg-c);
    color: var(--light-wrapper-c);
    transition: var(--transition);
    box-sizing: border-box;
  }
}

.input:checked + .toggler {
  background-color: #3a3a3a;

  &::before {
    left: 25px;
    background-color: var(--dark-bg-c);
  }
}
</style>

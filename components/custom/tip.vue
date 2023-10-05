<template>
  <UiSpace display="grid" block="def" class="tip">
    <div class="mark"></div>
    <UiSpace display="col" gap="sm">
      <UiText type="h4" :text="title" />
      <UiText :text="message" />
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
defineProps<{ title: string; message: string }>()
</script>

<style scoped lang="scss">
.tip {
  grid-template-columns: toRem(5) 1fr;
}

.mark {
  width: 100%;
  height: 100%;
  background-color: var(--m);
  border-radius: var(--br-rad);
}
</style>

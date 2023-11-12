<template>
  <USpace class="action" :style="`background-color: var(--${block === 'def' ? 'fg-m' : 'auto'})`">
    <USpace display="row" pos="between" style="padding: var(--space)" :full="true">
      <USpace display="row" gap="sm" class="title">
        <UText type="h4" :text="title" />
        <UText v-if="tip" :gray="true" :text="tip" />
      </USpace>
      <slot name="option" />
    </USpace>
    <ULine />
    <USpace display="col" style="padding: var(--space)">
      <slot />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; tip?: string; block?: 'def' | 'alt' }>(), {
  tip: undefined,
  block: 'alt'
})
</script>

<style scoped lang="scss">
.action {
  border: toRem(1) solid var(--br);
  border-radius: var(--br-rad);
}

.title {
  align-items: flex-end;

  @media (max-width: $zf) {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>

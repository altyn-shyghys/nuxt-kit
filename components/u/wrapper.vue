<template>
  <USpace class="action" :style="`background-color: var(--${block === 'def' ? 'fg-m' : 'auto'})`">
    <USpace display="row" pos="between" style="padding: var(--space)" :full="true">
      <USpace display="row" gap="sm" class="title">
        <UIcon v-if="icon" :name="icon" />
        <UText type="span" :text="title" />
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
withDefaults(defineProps<{ title: string; block?: 'def' | 'alt'; icon?: string }>(), {
  block: 'alt',
  icon: undefined
})
</script>

<style scoped lang="scss">
.action {
  border: toRem(1) solid var(--br);
  border-radius: var(--br-rad);
}

.title {
  span {
    @media (max-width: $mob) {
      font-size: 0.875rem;
    }
  }
}
</style>

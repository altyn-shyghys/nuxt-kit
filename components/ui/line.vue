<template>
  <div class="line" :style="`width: ${full ? '100%' : '80%'}`"></div>
</template>

<script setup lang="ts">
defineProps<{ full?: boolean }>()
</script>

<style scoped lang="scss">
.line {
  height: toRem(1);
  background-color: var(--br);
}
</style>

<template>
  <div class="line" :style="`width: ${full ? '100%' : '80%'}`" :class="{ dashed: dashed }"></div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ full?: boolean; dashed?: boolean }>(), { full: true })
</script>

<style scoped lang="scss">
.line {
  height: toRem(1);
  background-color: var(--br);
}

.dashed {
  background: repeating-linear-gradient(
    to right,
    var(--br) 0,
    var(--br) toRem(5),
    transparent 0,
    transparent toRem(10)
  );
}
</style>

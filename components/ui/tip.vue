<template>
  <UiSpace display="grid" gap="sm" block="def" :class="{ tip: true, wave: wave }">
    <UiIcon :name="ICON_INFO" size="ui" />
    <div class="mark"></div>
    <UiSpace display="col" gap="sm">
      <UiText type="h4" :text="title" />
      <UiText :text="message" />
    </UiSpace>
    <TipWave v-if="wave" />
  </UiSpace>
</template>

<script setup lang="ts">
import TipWave from '@/assets/graphics/wave.vue'
withDefaults(defineProps<{ title: string; message: string; wave?: boolean }>(), { wave: true })
</script>

<style scoped lang="scss">
.tip {
  grid-template-columns: toRem(32) toRem(2) 1fr;
}

.wave {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-bottom: var(--space-l);

  svg {
    position: absolute;
    bottom: toRem(-2);
    width: 100%;
    z-index: -1;
  }
}

.mark {
  width: 100%;
  height: 100%;
  background-color: var(--txt-m);
  border-radius: var(--br-rad);
}
</style>

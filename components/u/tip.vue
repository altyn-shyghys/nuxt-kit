<template>
  <USpace block="def" :class="{ wave: wave }">
    <USpace display="grid" gap="sm" class="tip">
      <UIcon name="ep:info-filled" size="ui" />
      <div class="mark"></div>
      <USpace display="col" gap="bit">
        <UText type="span" :text="title" />
        <UText gray :text="message" />
      </USpace>
    </USpace>
    <TipWave v-if="wave" />
  </USpace>
</template>

<script setup lang="ts">
import TipWave from '@/assets/graphics/wave.vue'
withDefaults(defineProps<{ title: string; message: string; wave?: boolean }>(), { wave: true })
</script>

<style scoped lang="scss">
.tip {
  grid-template-columns: toRem(32) toRem(2) 1fr;
  max-width: toRem(400);
}

.wave {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-bottom: var(--space-l);

  svg#wave {
    position: absolute;
    bottom: toRem(-2);
    left: 0;
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

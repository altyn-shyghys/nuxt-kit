<template>
  <Transition name="main" mode="out-in">
    <UiBlock v-if="isLoading" :center="true">
      <UiIcon name="eos-icons:three-dots-loading" :size="size" />
    </UiBlock>
    <img v-else :src="src" :alt="alt" crossorigin="*" />
  </Transition>
</template>

<script setup lang="ts">
import { useImage } from '@vueuse/core'

const props = withDefaults(defineProps<{ src: string; alt: string; size?: 'sm' | 'lg' }>(), {
  size: 'sm'
})
const { isLoading } = useImage({ src: props.src })
</script>

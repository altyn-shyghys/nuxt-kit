<template>
  <Teleport to="body">
    <Transition name="main" mode="out-in">
      <USpace v-if="modelValue" mode="center" class="modal">
        <USpace ref="windowTarget" display="col" block="alt" class="window">
          <USpace display="row" pos="between">
            <UText type="h3" :text="title" />
            <UButton
              title="ui.close"
              mode="icon"
              icon="ep:close"
              @trigger="emit('update:modelValue', !modelValue)"
            />
          </USpace>
          <UScroll v-auto-animate dir="bottom" height="80dvh">
            <slot />
          </UScroll>
        </USpace>
      </USpace>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean; title: string }>()
const emit = defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()

const windowTarget = ref<HTMLDivElement>()
onClickOutside(windowTarget, () => emit('update:modelValue', !props.modelValue))

useHead({
  bodyAttrs: {
    style: () => (props.modelValue ? 'height: 100%; overflow: hidden;' : undefined)
  }
})

watch(
  () => props.modelValue,
  (newV) => {
    setTimeout(() => {
      const window = document.querySelector('.window') as HTMLDivElement
      newV ? window.classList.add('active') : window.classList.remove('active')
    })
  }
)
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--tp);
  transition: opacity var(--tr);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 90;

  @media (max-width: $mob) {
    align-items: flex-end;
  }
}

.window {
  $modal-width: toRem(350);
  width: $modal-width;
  max-width: $modal-width;
  min-width: $modal-width;
  transition:
    transform var(--tr),
    opacity var(--tr);
  transform: translateY(toRem(400));
  opacity: 0;
  box-shadow: toRem(0) toRem(0) toRem(50) rgba(0, 0, 0, 0.2);

  @media (max-width: $mob) {
    border: 0;
    border-top: toRem(1) solid var(--br);
    padding-bottom: calc(var(--space-l) * 1.5);
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  @media (max-width: $zf) {
    padding-left: toRem(10);
    padding-right: toRem(10);
  }
}

.active {
  animation: bounce var(--tr);
  opacity: 1;
  transform: translateY(0);

  @media (max-width: $mob) {
    animation: mobBounce var(--tr);
    transform: translateY(var(--space));
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(toRem(400));
  }
  60% {
    opacity: 1;
    transform: translateY(toRem(-20));
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes mobBounce {
  0% {
    opacity: 0;
    transform: translateY(toRem(400));
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    transform: translateY(var(--space));
  }
}
</style>

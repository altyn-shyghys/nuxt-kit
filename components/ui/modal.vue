<template>
  <Teleport to="body">
    <Transition name="main" mode="out-in">
      <UiSpace v-if="modelValue" mode="center" class="modal">
        <UiSpace ref="windowTarget" display="col" block="alt" class="window">
          <UiSpace display="row" pos="between">
            <UiText type="h2" :text="title" />
            <UiButton
              title="ui.close"
              mode="icon"
              icon="ep:close"
              @trigger="emit('update:modelValue', !modelValue)"
            />
          </UiSpace>
          <UiScroll v-auto-animate dir="bottom" height="80dvh">
            <UiSpace display="col">
              <slot />
            </UiSpace>
          </UiScroll>
        </UiSpace>
      </UiSpace>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean; title: string }>()
const emit = defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()

const windowTarget = ref<HTMLDivElement>()
onClickOutside(windowTarget, () => emit('update:modelValue', !props.modelValue))
const styles = 'height: 100%; overflow: hidden;'

useHead({
  bodyAttrs: {
    style: () => (props.modelValue ? styles : '')
  }
})

watch(
  () => props.modelValue,
  (newV) => {
    setTimeout(() => {
      const some = document.querySelector('.window') as HTMLDivElement
      newV ? some.classList.add('active') : some.classList.remove('active')
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

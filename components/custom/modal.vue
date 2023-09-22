<template>
  <Teleport to="body">
    <Transition name="main" mode="out-in">
      <UiBlock v-if="modelValue" :center="true" class="modal">
        <UiBlock layout="col" block="alt-block" class="window">
          <UiScroll direction="vertical">
            <UiBlock layout="col">
              <UiBlock v-if="title" layout="row" pos="between">
                <UiText type="h2" :text="title" />
                <UiButton
                  title="app.closeModal"
                  mode="icon"
                  @trigger="$emit('update:modelValue', !modelValue)"
                >
                  <UiIcon name="ic:round-cancel" />
                </UiButton>
              </UiBlock>
              <slot />
            </UiBlock>
          </UiScroll>
        </UiBlock>
      </UiBlock>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean; title: string }>()
const emit = defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()
const body: HTMLBodyElement | null = document.querySelector('body')

const windowTarget = ref<HTMLDivElement | null>(null)
const styles = 'transition: background-color 0.5s ease; height: 100%; overflow: hidden;'

watch(
  () => props.modelValue,
  (val) => {
    setTimeout(() => {
      if (val) {
        body!.setAttribute('style', styles)
        windowTarget.value = document.querySelector('.window')
        windowTarget.value!.classList.add('active')
      } else {
        windowTarget.value!.classList.remove('active')
        windowTarget.value = null
        body!.setAttribute('style', '')
      }
    })
  }
)

onClickOutside(windowTarget, () => emit('update:modelValue', !props.modelValue))
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--tp);
  transition: background-color var(--tr), opacity var(--tr), transform var(--tr), height var(--tr);
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
  transition: var(--tr-fg), transform var(--tr), opacity var(--tr), height var(--tr);
  transition: all 0.5 ease;
  transform: translateY(toRem(500));
  opacity: 0;
  max-height: 80dvh;
  box-shadow: toRem(0) toRem(0) toRem(50) rgba(0, 0, 0, 0.2);

  @media (max-width: $mob) {
    margin: var(--space);
    width: 100%;
  }
}

.active {
  animation: bounce var(--tr);
  opacity: 1;
  transform: translateY(0);
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(toRem(500));
  }
  60% {
    opacity: 1;
    transform: translateY(toRem(-20));
  }
  100% {
    transform: translateY(0);
  }
}
</style>

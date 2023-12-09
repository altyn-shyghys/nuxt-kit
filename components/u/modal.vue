<template>
  <Teleport to="body">
    <Transition name="main" mode="out-in">
      <USpace v-if="modelValue" mode="center" class="modal">
        <USpace ref="windowTarget" block="alt" class="window">
          <USpace display="row" pos="between" style="padding: var(--space)">
            <UText type="h3" :text="title" style="text-align: left" />
            <UButton
              :title="$t('ui.close')"
              mode="icon"
              :icon="ICON_CLOSE"
              @trigger="emit('update:modelValue', !modelValue)"
            />
          </USpace>
          <ULine />
          <UScroll dir="bottom" height="80dvh">
            <div class="padding">
              <div class="subpadding"><slot /></div>
              <USpace v-if="slots.action" display="col" style="padding-top: var(--space)">
                <ULine />
                <div class="action"><slot name="action" /></div>
              </USpace>
            </div>
          </UScroll>
        </USpace>
      </USpace>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean; title: string }>()
const emit = defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()
const slots = defineSlots<{ default: any; action?: any }>()

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
  padding: 0;
  padding-bottom: var(--space-m);
  box-shadow: toRem(0) toRem(0) toRem(50) rgba(0, 0, 0, 0.2);

  @media (max-width: $mob) {
    margin-bottom: var(--space-m);
    border-bottom: 0;
    width: calc(100% - var(--space-l));
    max-width: calc(100% - var(--space-l));
    min-width: calc(100% - var(--space-l));
  }

  @media (max-width: $zf) {
    width: calc(100% - toRem(10));
    max-width: calc(100% - toRem(10));
    min-width: calc(100% - toRem(10));
  }
}

.padding {
  padding: var(--space) 0 var(--space-m) 0;

  @media (max-width: $mob) {
    padding-bottom: calc(var(--space-l) * 1.25);
  }
}

.subpadding {
  padding: 0 var(--space);

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

.action {
  display: flex;
  flex-direction: column;
  padding: 0 var(--space);
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
    transform: translateY(toRem(380));
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

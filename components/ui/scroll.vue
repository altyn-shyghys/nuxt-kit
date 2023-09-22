<template>
  <div ref="contentTarget" :class="classHandler"><slot /></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    direction?: 'vertical' | 'horizontal'
    triggerArr?: number[] | boolean[]
    height?: 'sm' | 'md'
  }>(),
  { direction: 'vertical', triggerArr: undefined, height: undefined }
)

const contentTarget = ref<HTMLDivElement | null>(null)
const { arrivedState } = useScroll(contentTarget)

const vertMaskHandler = () => {
  contentTarget.value!.offsetHeight >= contentTarget.value!.scrollHeight
    ? contentTarget.value!.classList.remove('sc-t', 'sc-m', 'sc-b')
    : contentTarget.value!.classList.add('sc-t')
}

const horizMaskHandler = () => {
  if (contentTarget.value!.offsetWidth >= contentTarget.value!.scrollWidth) {
    contentTarget.value!.classList.remove('sc-l', 'sc-c', 'sc-r')
  } else {
    contentTarget.value!.classList.add('horizontal')
    if (arrivedState.left) {
      contentTarget.value!.classList.remove('sc-c', 'sc-r')
      contentTarget.value!.classList.add('sc-l')
    } else if (!arrivedState.left && !arrivedState.right) {
      contentTarget.value!.classList.remove('sc-l', 'sc-r')
      contentTarget.value!.classList.add('sc-c')
    } else if (arrivedState.right) {
      contentTarget.value!.classList.remove('sc-l', 'sc-c')
      contentTarget.value!.classList.add('sc-r')
    }
  }
}

const maskHandler = () =>
  props.direction === 'horizontal' ? horizMaskHandler() : vertMaskHandler()

watch(arrivedState, () => maskHandler())

// const setWatch = () => {
//   watch(
//     () => [...props.triggerArr!],
//     () => {
//       maskHandler()
//     }
//   )
// }

const classHandler = computed(() =>
  props.direction === 'vertical'
    ? {
        vertical: true,
        sm: props.height === 'sm',
        'sc-t': arrivedState.top,
        'sc-m': !arrivedState.top && !arrivedState.bottom,
        'sc-b': arrivedState.bottom
      }
    : ''
)

useResizeObserver(contentTarget, () => maskHandler())

// onMounted(() => {
//   if (props.triggerArr?.length) {
//     setWatch()
//   }
// })
</script>

<style lang="scss">
.vertical {
  overflow-y: scroll;
}

.horizontal {
  overflow-x: scroll;
  width: 100%;
}

.sm {
  max-height: 20dvh;
}

.sc-t {
  -webkit-mask: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sc-m {
  -webkit-mask: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sc-b {
  -webkit-mask: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}

.sc-l {
  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sc-c {
  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sc-r {
  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>

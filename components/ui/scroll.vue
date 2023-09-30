<template>
  <div ref="contentTarget" :class="[direction === 'horizontal' ? 'st' : 'ed', height]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    direction?: 'vertical' | 'horizontal'
    trigger?: number
    height?: 'sm' | 'md'
  }>(),
  { direction: 'vertical', trigger: undefined, height: undefined }
)

const mode = props.direction === 'horizontal' ? 'right' : 'bottom'
const contentTarget = ref<HTMLDivElement | null>(null)
const { arrivedState } = useScroll(contentTarget)

const vertMaskHandler = () => {
  if (contentTarget.value!.offsetHeight >= contentTarget.value!.scrollHeight) {
    contentTarget.value!.classList.remove('st', 'md', 'ed')
  } else {
    contentTarget.value!.classList.add('vertical')
    if (arrivedState.top) {
      contentTarget.value!.classList.remove('md', 'ed')
      contentTarget.value!.classList.add('st')
    } else if (!arrivedState.top && !arrivedState.bottom) {
      contentTarget.value!.classList.remove('st', 'ed')
      contentTarget.value!.classList.add('md')
    } else if (arrivedState.bottom) {
      contentTarget.value!.classList.remove('st', 'md')
      contentTarget.value!.classList.add('ed')
    }
  }
}

const horizMaskHandler = () => {
  if (contentTarget.value!.offsetWidth >= contentTarget.value!.scrollWidth) {
    contentTarget.value!.classList.remove('st', 'md', 'ed')
  } else {
    contentTarget.value!.classList.add('horizontal')
    if (arrivedState.left) {
      contentTarget.value!.classList.remove('md', 'ed')
      contentTarget.value!.classList.add('st')
    } else if (!arrivedState.left && !arrivedState.right) {
      contentTarget.value!.classList.remove('st', 'ed')
      contentTarget.value!.classList.add('md')
    } else if (arrivedState.right) {
      contentTarget.value!.classList.remove('st', 'md')
      contentTarget.value!.classList.add('ed')
    }
  }
}

const maskHandler = () =>
  props.direction === 'horizontal' ? horizMaskHandler() : vertMaskHandler()

watch(arrivedState, () => maskHandler())

if (props.trigger !== undefined) {
  watch(
    () => props.trigger,
    () => maskHandler()
  )
}

useResizeObserver(contentTarget, () => maskHandler())
</script>

<style scoped lang="scss">
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

.md {
  max-height: 50dvh;
}

.st {
  -webkit-mask: linear-gradient(
    to v-bind(mode),
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.md {
  -webkit-mask: linear-gradient(
    to v-bind(mode),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.ed {
  -webkit-mask: linear-gradient(
    to v-bind(mode),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>

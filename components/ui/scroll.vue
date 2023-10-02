<template>
  <div ref="contentTarget" :class="{ st: fallback }" :style="styles"><slot /></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    direction?: 'vertical' | 'horizontal'
    trigger?: number
    height?: number
    fallback?: boolean
  }>(),
  { direction: 'vertical', trigger: undefined, height: 0, fallback: true }
)

const mode = props.direction === 'horizontal' ? 'right' : 'bottom'
const contentTarget = ref<HTMLDivElement | null>(null)
const { arrivedState: scState } = useScroll(contentTarget)
const styles = `overflow: scroll; max-height: ${props.height ? props.height + 'dvh' : 'auto'}`

const classHandler = (st: boolean, md: boolean, ed: boolean) => {
  if (st) {
    contentTarget.value!.classList.remove('md', 'ed')
    contentTarget.value!.classList.add('st')
  } else if (md) {
    contentTarget.value!.classList.remove('st', 'ed')
    contentTarget.value!.classList.add('md')
  } else if (ed) {
    contentTarget.value!.classList.remove('st', 'md')
    contentTarget.value!.classList.add('ed')
  }
}

const maskHandler = () => {
  if (props.direction === 'horizontal') {
    contentTarget.value!.offsetWidth >= contentTarget.value!.scrollWidth
      ? contentTarget.value!.classList.remove('st', 'md', 'ed')
      : classHandler(scState.left, !scState.left && !scState.right, scState.right)
  } else {
    contentTarget.value!.offsetHeight >= contentTarget.value!.scrollHeight
      ? contentTarget.value!.classList.remove('st', 'md', 'ed')
      : classHandler(scState.top, !scState.top && !scState.bottom, scState.bottom)
  }
}

if (props.trigger !== undefined) {
  watch(
    () => props.trigger,
    () => maskHandler()
  )
}

watch(scState, () => maskHandler())
useResizeObserver(contentTarget, () => maskHandler())
</script>

<style scoped lang="scss">
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

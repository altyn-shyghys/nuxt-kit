<template>
  <div ref="target" :class="{ st: fallback }" :style="styles"><slot /></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dir?: 'vertical' | 'horizontal'
    trigger?: number
    height?: string
    fallback?: boolean
  }>(),
  { dir: 'vertical', trigger: undefined, height: undefined, fallback: true }
)

const mode = props.dir === 'horizontal' ? 'right' : 'bottom'
const target = ref<HTMLDivElement>()
const { arrivedState: scState } = useScroll(target)
const styles = `overflow: scroll; max-height: ${props.height ? props.height + 'dvh' : 'auto'}`

const classHandler = (st: boolean, md: boolean, ed: boolean) => {
  if (st) target.value!.className = 'st'
  else if (md) target.value!.className = 'md'
  else if (ed) target.value!.className = 'ed'
}

const maskHandler = () => {
  if (props.dir === 'horizontal') {
    target.value!.offsetWidth >= target.value!.scrollWidth
      ? (target.value!.className = '')
      : classHandler(scState.left, !scState.left && !scState.right, scState.right)
  } else {
    target.value!.offsetHeight >= target.value!.scrollHeight
      ? (target.value!.className = '')
      : classHandler(scState.top, !scState.top && !scState.bottom, scState.bottom)
  }
}

if (props.trigger !== undefined) {
  watch(
    () => props.trigger,
    () => setTimeout(() => maskHandler())
  )
}

watch(scState, () => maskHandler())
useResizeObserver(target, () => maskHandler())
</script>

<style scoped lang="scss">
.st {
  -webkit-mask: linear-gradient(
    to v-bind(mode),
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
}

.md {
  -webkit-mask: linear-gradient(
    to v-bind(mode),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
}

.ed {
  -webkit-mask: linear-gradient(
    to v-bind(mode),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>

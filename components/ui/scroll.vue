<template>
  <div ref="target" :style="styles"><slot /></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dir?: 'vert' | 'horiz'
    trigger?: number
    height?: string
    fallback?: boolean
  }>(),
  { dir: 'vert', trigger: undefined, height: undefined, fallback: true }
)

const target = ref<HTMLDivElement>()
const { arrivedState: scState } = useScroll(target)

const styles = ref('overflow: scroll;')

const styleHandler = (st: boolean, md: boolean, ed: boolean) => {
  const getMask = () => {
    const nonTp = 'rgba(0, 0, 0, 1)'
    const tp = 'rgba(0, 0, 0, 0)'

    if (st) return `${nonTp} 0%, ${nonTp} 90%, ${tp} 100%`
    else if (md) return `${tp} 0%, ${nonTp} 10%, ${nonTp} 90%, ${tp} 100%`
    else if (ed) return `${tp}, ${nonTp} 10%, ${nonTp} 100%`
  }

  styles.value = `
    overflow: scroll;
    max-height: ${props.height ? props.height : 'auto'}; 
    -webkit-mask: linear-gradient(to ${props.dir === 'horiz' ? 'right' : 'bottom'}, ${getMask()})
  `
}

const maskHandler = () => {
  if (props.dir === 'horiz') {
    target.value!.offsetWidth >= target.value!.scrollWidth
      ? (styles.value = '')
      : styleHandler(scState.left, !scState.left && !scState.right, scState.right)
  } else {
    target.value!.offsetHeight >= target.value!.scrollHeight
      ? (styles.value = '')
      : styleHandler(scState.top, !scState.top && !scState.bottom, scState.bottom)
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
// - - - //
</style>

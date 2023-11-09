<template>
  <div ref="target" :style="defStyles + styles">
    <ClientOnly>
      <slot />
      <template #fallback><UFallback type="scroll" :height="height" /></template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dir?: 'right' | 'bottom'
    trigger?: number
    height?: string
  }>(),
  { dir: 'bottom', trigger: undefined, height: undefined }
)

const target = ref<HTMLDivElement>()
const { arrivedState: scState } = useScroll(target)
const defStyles = `overflow: scroll; max-height: ${props.dir === 'bottom' ? props.height : 'auto'};`
const styles = ref('')

const maskConf = {
  st: 'rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%',
  md: 'rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%',
  ed: 'rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 100%'
}

const styleHandler = (st: boolean, md: boolean, ed: boolean) => {
  const getMask = () => {
    if (st) return maskConf.st
    else if (md) return maskConf.md
    else if (ed) return maskConf.ed
  }

  styles.value = `-webkit-mask: linear-gradient(to ${props.dir}, ${getMask()});`
}

const maskHandler = () => {
  if (props.dir === 'right') {
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

<template>
  <USpace display="col" gap="sm" :style="`width: ${width}`">
    <UText :text="label" :gray="true" />
    <div ref="selectTarget" v-auto-animate>
      <button
        ref="selected"
        :disabled="loading"
        :title="modelValue"
        class="selected"
        @click="active = !active"
      >
        <USpace mode="center" style="position: relative; min-height: 1.5rem">
          <UIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
          <UIcon v-else-if="!options.length" :name="ICON_EMPTY" style="position: absolute" />
          <USpace display="row" pos="between" :style="loading ? `visibility: hidden` : null">
            <USpace display="row" gap="sm">
              <UIcon v-if="icon" size="def" :name="icon" />
              <UText type="h4" :text="modelValue" />
            </USpace>
            <UIcon id="select-arrow" name="ep:arrow-down-bold" size="sm" :style="rotateHandler" />
          </USpace>
        </USpace>
      </button>
      <USpace v-if="active" display="col" gap="none" class="options" @click="optionsHandler">
        <USpace v-if="options.length >= 10" display="row" gap="sm" style="padding: var(--space-m)">
          <UIcon name="gg:search" class="search-icon" />
          <input id="option-search" v-model="search" type="text" placeholder="Search" />
        </USpace>
        <UScroll height="10rem" :trigger="search.length">
          <USpace v-auto-animate display="col" gap="bit">
            <button
              v-for="(opt, idx) in printArr"
              :key="idx"
              class="option"
              :data-opt="idx"
              :title="opt"
            >
              <UText type="h4" :text="opt" />
            </button>
            <UScreen v-if="!printArr.length" type="empty" style="border-width: 0.063rem 0 0 0" />
          </USpace>
        </UScroll>
      </USpace>
    </div>
  </USpace>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    options: string[]
    icon?: string
    label: string
    loading?: boolean
    width?: string
  }>(),
  { icon: undefined, width: '100%' }
)

const emit = defineEmits<{ (evt: 'update:modelValue', value: string): void }>()

const selectTarget = ref<HTMLDivElement>()
const selected = ref<HTMLDivElement>()
const optionTarget = '[data-opt]'
const active = ref<boolean>(false)
const rotateHandler = computed(() => (active.value ? 'transform: rotate(180deg);' : null))

const printArr = ref<string[]>(props.options)
const search = ref<string>('')

watch(active, (newV) => {
  if (newV) {
    search.value = ''
    printArr.value = props.options
  }
})

watch(search, (newV) => {
  newV.length
    ? (printArr.value = props.options.filter((opt) => opt.toLowerCase().match(newV.toLowerCase())))
    : (printArr.value = props.options)
})

watch(
  () => props.loading,
  (newV) => {
    if (!newV) printArr.value = props.options
  }
)

const optionsHandler = (evt: MouseEvent) => {
  if ((evt.target as HTMLElement).closest(optionTarget)) {
    const optionIdx = +(evt.target as HTMLButtonElement).dataset.opt!
    emit('update:modelValue', props.options[optionIdx])
    selected.value?.focus()
    active.value = false
  }
}

onClickOutside(selectTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest(optionTarget)) active.value = false
})
</script>

<style scoped lang="scss">
@mixin option-styles {
  @include ui-styles;
  cursor: pointer;
  width: 100%;
  text-align: left;
  background-color: var(--fg-m);
  font-size: 0.875rem;
  border: toRem(1) solid var(--br);
  color: var(--txt-m);

  h4,
  div,
  svg {
    pointer-events: none;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover,
  &:focus {
    border-color: var(--m);
  }
}

.selected {
  @include option-styles;
  width: 100%;

  &:active {
    #select-arrow {
      transform: scale(1.3);
    }
  }
}

.option {
  @include option-styles;
  background-color: var(--fg-s);
  min-height: var(--ui-size);

  &:active {
    transform: var(--scale);
  }
}

.options {
  overflow: hidden;
  position: absolute;
  top: calc(var(--ui-size) + toRem(2));
  z-index: 6;
  width: 100%;
  background-color: var(--fg-m);
  border-radius: var(--br-rad);
  border: toRem(1) solid var(--br);
}

input {
  font-family: 'Montserrat';
  width: 100%;
  background-color: transparent;
  color: var(--txt-m);
}
</style>

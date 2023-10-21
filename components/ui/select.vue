<template>
  <div ref="selectTarget" v-auto-animate :style="`width: ${width}`">
    <button
      ref="selected"
      :disabled="loading"
      :title="modelValue"
      class="selected"
      @click="active = !active"
    >
      <UiSpace mode="center" style="position: relative">
        <UiIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
        <UiSpace display="row" pos="between" :style="loading ? `visibility: hidden` : null">
          <UiSpace display="row" gap="sm">
            <UiIcon v-if="icon" size="def" :name="icon" />
            <UiText type="h4" :text="lenghtHandler(modelValue)" />
          </UiSpace>
          <UiIcon id="select-arrow" name="ep:arrow-down-bold" size="sm" :style="rotateHandler" />
        </UiSpace>
      </UiSpace>
    </button>
    <UiSpace v-if="active" display="col" gap="none" class="options" @click="optionsHandler">
      <UiSpace v-if="options.length >= 10" display="row" gap="sm" class="search">
        <UiIcon name="gg:search" class="search-icon" />
        <input id="option-search" v-model="search" type="text" placeholder="Search" />
      </UiSpace>
      <UiScroll height="10rem">
        <UiSpace v-auto-animate display="col" gap="bit">
          <button
            v-for="(opt, idx) in printOptions"
            :key="idx"
            class="option"
            :data-opt="idx"
            :title="opt"
          >
            <UiText type="h4" :text="lenghtHandler(opt)" />
          </button>
          <UiScreen v-if="!printOptions.length" type="empty" style="border-width: 0.063rem 0 0 0" />
        </UiSpace>
      </UiScroll>
    </UiSpace>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    options: string[]
    icon?: string
    loading?: boolean
    width?: string
    sub?: number
  }>(),
  { type: 'str', icon: undefined, width: '100%', sub: undefined }
)

const emit = defineEmits<{ (evt: 'update:modelValue', value: string): void }>()

const selectTarget = ref<HTMLDivElement>()
const selected = ref<HTMLDivElement>()
const optionTarget = '[data-opt]'
const active = ref<boolean>(false)
const rotateHandler = computed(() => (active.value ? 'transform: rotate(180deg);' : null))

const printOptions = ref<string[]>(props.options)
const search = ref<string>('')

watch(active, (newV) => {
  if (newV) {
    search.value = ''
    printOptions.value = props.options
  }
})

watch(search, (newV) => {
  if (newV.length) {
    printOptions.value = props.options.filter((opt) => opt.toLowerCase().match(newV.toLowerCase()))
  } else {
    printOptions.value = props.options
  }
})

watch(
  () => props.loading,
  (newV) => {
    if (!newV) {
      printOptions.value = props.options
    }
  }
)

const lenghtHandler = (opt: string) =>
  opt.length >= (props.sub || 25) && props.sub ? opt.substring(0, props.sub) + '...' : opt

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
  word-wrap: normal;
  color: var(--txt-m);

  h4,
  div,
  span {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    border-color: var(--m);
  }
}

.selected {
  @include option-styles;

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

  h4 {
    font-weight: normal;
  }

  &:active {
    transform: scale(0.95);
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

.search {
  padding: var(--space-m) var(--space);
  height: var(--ui-size);
  min-height: var(--ui-size);
}

input {
  font-family: 'Montserrat';
  width: 100%;
  background-color: transparent;
  color: var(--txt-m);
}
</style>

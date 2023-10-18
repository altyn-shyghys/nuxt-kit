<template>
  <div ref="selectTarget" :style="`width: ${width}; position: relative`">
    <button
      :disabled="loading"
      :class="{ disabled: loading }"
      :title="$t(modelValue.name)"
      class="button"
      @click.prevent="active = !active"
    >
      <UiIcon v-if="loading" :name="ICON_LOADING_CIRCLE" style="position: absolute" />
      <UiSpace display="row" pos="between" :style="loading ? `visibility: hidden` : null">
        <UiSpace display="row" gap="sm">
          <UiIcon v-if="modelValue.icon" size="def" :name="modelValue.icon" />
          <UiText type="h4" :text="modelValue.name" />
        </UiSpace>
        <UiIcon name="ep:arrow-down-bold" size="sm" :style="rotateHandler" />
      </UiSpace>
    </button>
    <Transition name="select">
      <UiSpace
        v-if="active && options.length"
        display="col"
        class="options"
        @click="optionsHandler"
      >
        <!-- <UiInput
          v-if="options.length > 10"
          v-model="search"
          name="search"
          placeholder="app.search"
        /> -->
        <div v-if="options.length > 10" class="padding"><div class="hr"></div></div>
        <button
          v-for="(option, idx) in defOptions"
          :key="idx"
          class="button"
          style="justify-content: flex-start"
          :data-option="option.id"
          :title="option.name"
          @click.prevent="active = !active"
        >
          <UiSpace display="row" gap="sm">
            <UiIcon v-if="option.icon" size="def" :name="option.icon" />
            <UiText type="h4" :text="optionLenghtHandler(option.name)" />
          </UiSpace>
        </button>
      </UiSpace>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: SelectOption
    options: SelectOption[]
    loading?: boolean
    stringId?: boolean
    width?: string
    sub?: boolean
  }>(),
  { width: '100%' }
)

const emit = defineEmits<{ (evt: 'update:modelValue', value: SelectOption): void }>()

const defOptions = ref<SelectOption[]>(props.options)
const search = ref<string>('')

watch(search, (newV) => {
  if (newV.length) {
    defOptions.value = props.options.filter((option) =>
      option.name.toLowerCase().match(newV.toLowerCase())
    )
  } else {
    defOptions.value = props.options
  }
})

watch(
  () => props.loading,
  (newV) => {
    if (!newV) {
      defOptions.value = props.options
    }
  }
)

watch(
  () => props.options,
  () => {
    defOptions.value = []
    defOptions.value = props.options
  }
)

const lenghtHandler = (option: string) =>
  option.length >= 25 && props.sub ? option.substring(0, 25) + '...' : option

const active = ref<boolean>(false)
const rotateHandler = computed(() => (active.value ? 'transform: rotate(180deg);' : null))

const target = '[data-option]'
const optionsHandler = (evt: MouseEvent) => {
  if ((evt.target as HTMLElement).closest(target)) {
    if (props.stringId) {
      const idx = (evt.target as HTMLButtonElement).dataset.idx!
      props.options.forEach((option) => {
        if (option.id === idx) {
          emit('update:modelValue', option)
        }
      })
    } else {
      const idx = +(evt.target as HTMLButtonElement).dataset.idx!
      emit('update:modelValue', props.options[idx])
    }
    active.value = false
    search.value = ''
  }
}

const selectTarget = ref<HTMLDivElement | null>(null)
onClickOutside(selectTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest(target)) {
    active.value = false
    search.value = ''
  }
})

onMounted(() => {
  defOptions.value = []
  defOptions.value = props.options
})
</script>

<style scoped lang="scss">
.button {
  @include ui-styles;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--btn-bg-m);

  &,
  span {
    color: var(--fg-m);
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 var(--space-m) var(--btn-bg-m);
  }

  h4 {
    @media (max-width: $mob) {
      font-size: 0.875rem;
    }
  }
}

.options {
  position: absolute;
  top: calc(var(--ui-size) + toRem(2));
  z-index: 6;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: toRem(1);
  background-color: var(--txt-m);
  border-radius: var(--br-rad);
  max-height: toRem(157);
  overflow: scroll;

  input {
    background-color: var(--btn-bg-m) !important;
    color: var(--fg-m) !important;
    border: toRem(3) solid var(--btn-bg-m) !important;
    min-height: var(--ui-size);
  }

  input:hover,
  input:focus {
    border: toRem(3) solid var(--m) !important;
  }
}

.option {
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  min-height: var(--ui-size);

  h4,
  svg {
    pointer-events: none;
  }
}

.select {
  &-enter-active {
    animation: bounce var(--tr);
  }
  &-leave-active {
    transition: all var(--tr);
    transform: translateY(toRem(-2));
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(toRem(0));
  }
  60% {
    opacity: 1;
    transform: translateY(toRem(10));
  }
  100% {
    transform: translateY(0);
  }
}
</style>

<template>
  <div ref="select" :class="['select', width]">
    <UiButton
      ref="selectTarget"
      :title="modelValue.name"
      :loading="loading"
      :data-select="modelValue.id"
      class="selected"
      @trigger="isActive = !isActive"
    >
      <UiBlock layout="row" gap="sm">
        <UiIcon v-if="modelValue.icon" :name="modelValue.icon" />
        <UiText type="h4" :text="optionLenghtHandler(modelValue.name) || ''" />
      </UiBlock>
      <div :class="{ rotate: isActive }">
        <UiIcon name="ep:arrow-down-bold" size="min" />
      </div>
    </UiButton>
    <Transition name="select">
      <UiBlock
        v-if="isActive && options.length"
        layout="col"
        class="options"
        @click="optionsHandler"
      >
        <UiInput
          v-if="options.length > 10"
          v-model="search"
          name="search"
          placeholder="app.search"
        />
        <div v-if="options.length > 10" class="padding"><div class="hr"></div></div>
        <UiBlock
          v-if="!defOptions.length"
          layout="col"
          block="alt-block"
          class="empty"
          :center="true"
          :full="true"
        >
          <UiIcon size="md" name="tabler:table-alias" />
          <UiText text="app.emptyTable" />
        </UiBlock>
        <UiButton
          v-for="(option, idx) in defOptions"
          :key="idx"
          class="option"
          :data-idx="option.id"
          :title="option.name"
        >
          <UiIcon v-if="option.icon" :name="option.icon" />
          <UiText type="h4" :text="optionLenghtHandler(option.name)" />
        </UiButton>
      </UiBlock>
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
    width?: 'sm' | 'md' | 'lg' | 'full'
    sub?: boolean
  }>(),
  { width: 'full' }
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

const optionLenghtHandler = (option: string) => {
  return option.length >= 25 && props.sub ? option.substring(0, 25) + '...' : option
}

const isActive = ref<boolean>(false)
const optionsHandler = (evt: MouseEvent) => {
  if ((evt.target as HTMLElement).closest('.option')) {
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
    isActive.value = false
    search.value = ''
  }
}

const selectTarget = ref<HTMLDivElement | null>(null)
onClickOutside(selectTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest('.options')) {
    isActive.value = false
    search.value = ''
  }
})

onMounted(() => {
  defOptions.value = []
  defOptions.value = props.options
})
</script>

<style scoped lang="scss">
.select {
  position: relative;

  h4 {
    font-size: toRem(14);

    @media (max-width: $zf) {
      font-size: 0.7rem;
    }
  }

  &.sm {
    width: toRem(100);
  }

  &.md {
    width: toRem(250);
  }

  &.lg {
    width: toRem(300);
  }

  &.full {
    width: 100%;
  }
}

.search {
  padding: var(--space);
  label {
    color: var(--fg-m) !important;
  }
}

.data-wp {
  padding: 0 var(--space) var(--space) var(--space);
}

.selected {
  justify-content: space-between;
  width: 100%;
  z-index: 5;
  text-align: left;

  svg {
    transition: transform 0.5s ease, fill 0.5s ease, color 0.5s ease;
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

.rotate {
  svg {
    transform: rotate(180deg);
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

.empty {
  background-color: var(--txt-m);
  border: 0;

  small,
  svg {
    color: var(--fg-m) !important;
  }

  svg {
    fill: var(--fg-m) !important;
  }
}

.padding {
  padding: 0 var(--space);
}

.hr {
  min-height: toRem(1);
  width: 100%;
  background-color: var(--br);
}
</style>

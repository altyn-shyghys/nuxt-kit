<template>
  <USpace v-auto-animate display="col" gap="sm" full>
    <button :title="title" class="accordion" @click="active = !active">
      <USpace display="row" full pos="between">
        <USpace display="row" gap="sm">
          <UIcon v-if="icon" size="def" :name="icon" />
          <UText type="span" :text="title" style="font-size: 0.875rem" />
        </USpace>
        <UIcon id="select-arrow" name="ep:arrow-down-bold" size="sm" :style="rotateHandler" />
      </USpace>
    </button>
    <USpace v-if="active" full>
      <slot />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ title: string; icon?: string }>()

const active = ref<boolean>(false)
const rotateHandler = computed(() => (active.value ? 'transform: rotate(180deg);' : null))
</script>

<style scoped lang="scss">
@mixin option-styles {
  font-family: 'Montserrat';
  cursor: pointer;
  height: var(--ui-size);
  min-height: var(--ui-size);
  max-height: var(--ui-size);
  background-color: var(--bg);
  width: 100%;
  text-align: left;
  color: var(--txt-m);

  span,
  div,
  svg {
    pointer-events: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.accordion {
  @include option-styles;
  width: toRem(100);
  max-width: 100%;
  min-width: 100%;

  &:active {
    #select-arrow {
      transform: scale(1.3);
    }
  }

  &:hover,
  &:focus {
    #select-arrow {
      color: var(--m);
    }
  }
}
</style>

<template>
  <UiSpace block="alt" display="col" style="padding-bottom: 0" :class="{ max: max }">
    <UiSpace dispaly="row" pos="between" :class="{ options: true, hide: max }">
      <div :class="{ 'zf-hide': slots.options }">
        <UiSpace dispaly="row" gap="sm">
          <UiIcon name="tabler:table-filled" size="md" />
          <div :class="{ hide: slots.options }">
            <UiSpace dispaly="col" gap="min" class="hide">
              <UiText type="h4" :text="title" />
              <UiText text="app.tableName" />
            </UiSpace>
          </div>
        </UiSpace>
      </div>
      <UiSpace dispaly="row" class="options">
        <slot name="options" />
        <UiButton
          v-if="loading !== undefined"
          title="app.reload"
          mode="icon"
          @trigger="$emit('reload')"
        >
          <UiIcon name="pepicons-pop:reload" />
        </UiButton>
      </UiSpace>
    </UiSpace>
    <UiSpace :center="true" :full="true">
      <Transition name="main" mode="out-in">
        <div class="table-container">
          <UiScroll :height="max ? '100%' : '55dvh'" :class="['table-scroll']">
            <table class="table">
              <slot name="table" />
            </table>
          </UiScroll>
        </div>
      </Transition>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    error?: any
    loading?: boolean
    lenght?: number
    max?: boolean
  }>(),
  {
    loading: undefined,
    error: undefined,
    lenght: undefined
  }
)

defineEmits<{ (e: 'reload'): void }>()
const slots = defineSlots<{ options(): any; table(): any }>()
</script>

<style scoped lang="scss">
.max {
  padding: 0 !important;
  border: 0 !important;
}

.table-options {
  padding-bottom: var(--space);
}

.hide {
  display: none !important;
}

.table-container {
  width: 100%;
  max-width: 100%;
}

.table {
  width: 100%;
  position: relative;
  min-width: min-content;

  th,
  td {
    text-align: left;
    border-radius: calc(var(--br-rad) / 2);
    transition: var(--tr-fg);
  }

  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
    padding: toRem(11) toRem(10);
    background-color: var(--btn-bg-m);
    color: var(--fg-m) !important;
    transition: var(--tr-fg);
    border: toRem(1) solid var(--btn-bg-m);

    @media (max-width: $mob) {
      font-size: 0.9rem;
    }
  }

  td {
    padding: toRem(5) toRem(10);
    border: toRem(1) solid var(--br);
  }

  tr:hover {
    background-color: var(--fg-s);
  }

  .hr {
    width: 100%;
    height: toRem(1);
    background-color: var(--tr);
  }
}

.hide {
  @media (max-width: $mob) {
    display: none;
  }
}

.zf-hide {
  @media (max-width: $zf) {
    display: none;
  }
}

.options {
  @media (max-width: $zf) {
    width: 100%;
    justify-content: space-between;
  }
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: var(--space);
  transition: background-color var(--tr);
  background-color: var(--bg);
  z-index: 2;
}

.scroll-helper {
  position: sticky;
  width: 100%;
  top: 0;
  border: 0 !important;
  background-color: var(--bg);
}

.margin {
  margin-bottom: var(--space);
}
</style>

<template>
  <UiBlock pos="left" block="alt-block" :class="{ 'table-wrapper': true, clear: clear }">
    <UiBlock layout="row" pos="between" :class="{ 'table-options': true, 'table-hide': clear }">
      <div :class="{ 'zf-hide': slots.options }">
        <UiBlock layout="row" gap="sm">
          <UiIcon name="tabler:table-filled" size="md" />
          <div :class="{ hide: slots.options }">
            <UiBlock layout="col" gap="min" class="hide">
              <UiText type="h4" :text="title" />
              <UiText text="app.tableName" />
            </UiBlock>
          </div>
        </UiBlock>
      </div>
      <UiBlock layout="row" class="options">
        <slot name="options" />
        <UiButton
          v-if="loading !== undefined"
          title="app.reload"
          mode="icon"
          @trigger="$emit('reload')"
        >
          <UiIcon name="pepicons-pop:reload" />
        </UiButton>
      </UiBlock>
    </UiBlock>
    <UiBlock :center="true" :full="true">
      <Transition name="main" mode="out-in">
        <AppScreen v-if="loading" class="margin" />
        <AppScreen v-else-if="error" mode="error" class="margin" />
        <AppScreen v-else-if="!lenght" mode="empty" class="margin" />
        <div v-else class="table-container">
          <UiScroll direction="horizontal" :class="['table-scroll', clear ? 'no-h' : 'h']">
            <table class="table">
              <tr>
                <td :class="{ 'scroll-helper': true, 'table-hide': clear }" colspan="3"></td>
              </tr>
              <slot name="table" />
            </table>
          </UiScroll>
        </div>
      </Transition>
    </UiBlock>
  </UiBlock>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ title: string; error?: any; loading?: boolean; lenght: number; clear?: boolean }>(),
  {
    loading: undefined,
    error: undefined,
    lenght: undefined
  }
)

defineEmits<{ (e: 'reload'): void }>()
const slots = defineSlots<{ options(): any; table(): any }>()
</script>

<style lang="scss">
.table-wrapper {
  padding: var(--space) var(--space) 0 var(--space) !important;
}

.clear {
  padding: 0 !important;
  border: 0 !important;
}

.table-options {
  padding-bottom: var(--space);
}

.table-hide {
  display: none !important;
}

.table-container {
  width: 100%;
  max-width: 100%;
}

.table-scroll {
  overflow-y: scroll;
  height: fit-content;
  padding-bottom: var(--space);
}

.h {
  max-height: 55dvh;
}

.no-h {
  max-height: 100%;
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

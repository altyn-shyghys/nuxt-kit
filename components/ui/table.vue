<template>
  <ClientOnly>
    <UiSpace display="col" block="alt" style="padding-bottom: 0">
      <UiSpace display="row" pos="between">
        <UiSpace display="row" gap="sm">
          <UiIcon name="tabler:table-filled" size="md" class="hide" />
          <UiSpace display="col" gap="bit">
            <UiText type="h4" :text="title" />
            <UiText :gray="true" text="ui.tableName" />
          </UiSpace>
        </UiSpace>
        <UiSpace display="row" class="options">
          <slot name="options" />
          <UiButton
            v-if="loading !== undefined"
            title="ui.reload"
            icon="pepicons-pop:reload"
            mode="icon"
            @trigger="$emit('reload')"
          />
        </UiSpace>
      </UiSpace>
      <UiSpace :center="true" :full="true">
        <div class="table-container">
          <div class="hider"></div>
          <UiScroll v-auto-animate dir="right" :class="{ 'table-scroll': true, max: print }">
            <table class="table">
              <slot name="table" />
            </table>
          </UiScroll>
        </div>
      </UiSpace>
    </UiSpace>
    <template #fallback><UiFallback /></template>
  </ClientOnly>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    error?: any
    loading?: boolean
    lenght?: number
    print?: boolean
  }>(),
  {
    loading: undefined,
    error: undefined,
    lenght: undefined
  }
)

defineEmits<{ (e: 'reload'): void }>()
defineSlots<{ options(): any; table(): any }>()
</script>

<style lang="scss">
.table-container {
  width: 100%;
  max-width: 100%;
  position: relative;
}

.hider {
  position: absolute;
  width: 100%;
  height: 1.8rem;
  z-index: 2;
  background: linear-gradient(180deg, var(--bg) 50%, transparent 100%);
}

.table-scroll {
  overflow-y: scroll;
  height: fit-content;
  padding-bottom: var(--space);
  max-height: 50dvh;

  &.max {
    max-width: 100% !important;
  }
}

.table {
  width: 100%;
  position: relative;
  border-collapse: separate;
  min-width: min-content;
  border-spacing: toRem(1);
  text-align: left;
  color: var(--txt-s);
  border-radius: calc(var(--br-rad) / 2);

  th {
    position: -webkit-sticky;
    position: sticky;
    top: toRem(0);
    z-index: 3;
    padding: toRem(9) var(--space-m);
    background-color: var(--btn-bg);
    color: var(--fg-m);
    border-radius: calc(var(--br-rad) / 2);
  }

  td {
    position: inherit;
    z-index: 1;
    border-radius: calc(var(--br-rad) / 2);
    border: toRem(1) solid var(--br);
    padding: toRem(5.5) var(--space-m);
  }

  tr:hover {
    background-color: var(--fg-s);
  }
}

.hide {
  @media (max-width: $zf) {
    display: none;
  }
}
</style>

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
          <UiScroll v-auto-animate dir="right" :class="{ 'table-scroll': true, max: print }">
            <table class="table">
              <slot name="table" />
            </table>
          </UiScroll>
        </div>
      </UiSpace>
    </UiSpace>
    <template #fallback>
      <UiSpace mode="center" block="def" :full="true" style="box-sizing: border-box">
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
      </UiSpace>
    </template>
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
}

.table {
  width: 100%;
  padding-bottom: var(--space);
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
  @media (max-width: $zf) {
    display: none;
  }
}

.zf-hide {
  @media (max-width: $zf) {
    display: none;
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

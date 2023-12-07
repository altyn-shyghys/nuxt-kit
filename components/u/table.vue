<template>
  <ClientOnly>
    <USpace display="col" :block="print ? undefined : 'alt'" full style="padding-bottom: 0">
      <USpace display="row" pos="between">
        <USpace display="row" gap="sm" class="table-head">
          <UIcon name="tabler:table-filled" size="md" class="hide" />
          <USpace display="col" gap="bit">
            <UText type="span" :text="title" style="font-size: 0.813rem" />
            <UText gray :text="$t('ui.tableName')" />
          </USpace>
        </USpace>
        <USpace display="row" class="options" :style="`display: ${print ? 'none' : 'flex'}`">
          <slot name="options" />
        </USpace>
      </USpace>
      <USpace v-auto-animate full>
        <div v-if="lenght === 0" class="table-screen"><UScreen type="empty" /></div>
        <div v-else-if="error" class="table-screen"><UScreen type="error" /></div>
        <div v-else class="table-container">
          <UScroll dir="right" :class="{ 'table-scroll': true, max: print }">
            <table>
              <slot name="table" />
            </table>
          </UScroll>
        </div>
      </USpace>
    </USpace>
    <template #fallback><UFallback type="table" /></template>
  </ClientOnly>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    error?: any | null
    lenght?: number
    print?: boolean
  }>(),
  {
    lenght: undefined,
    error: null
  }
)

defineEmits<{ (e: 'reload'): void }>()
defineSlots<{ options(): any; table(): any }>()
</script>

<style scoped lang="scss">
.table-container {
  width: 100%;
  max-width: 100%;
  position: relative;
}

.table-head {
  h4,
  div {
    pointer-events: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: $mob) {
    width: toRem(210);
  }

  @media (max-width: $zf) {
    width: toRem(120);
  }
}

.table-scroll {
  overflow-y: scroll;
  height: fit-content;
  padding-bottom: var(--space);
  max-height: 50vh;
  position: inherit;
  z-index: 5;
  border-radius: var(--br-rad) var(--br-rad) 0 0;
}

.table-screen {
  padding-bottom: var(--space);
}

.max {
  max-height: 100% !important;
  padding-bottom: 0;
}

.hide {
  @media (max-width: $zf) {
    display: none;
  }
}
</style>

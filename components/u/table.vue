<template>
  <ClientOnly>
    <USpace display="col" :block="print ? undefined : 'alt'" :full="true" style="padding-bottom: 0">
      <USpace display="row" pos="between">
        <USpace display="row" gap="sm">
          <UIcon name="tabler:table-filled" size="md" class="hide" />
          <USpace display="col" gap="bit">
            <UText type="h4" :text="title" />
            <UText :gray="true" text="ui.tableName" />
          </USpace>
        </USpace>
        <USpace display="row" class="options" :style="`display: ${print ? 'none' : 'flex'}`">
          <slot name="options" />
        </USpace>
      </USpace>
      <USpace v-auto-animate :full="true">
        <div v-if="lenght === 0" class="table-screen"><UScreen type="empty" /></div>
        <div v-else-if="error" class="table-screen"><UScreen type="error" /></div>
        <div v-else class="table-container">
          <div class="hider"></div>
          <UScroll dir="right" :class="{ 'table-scroll': true, max: print }">
            <table v-auto-animate>
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
  max-height: 50vh;
  position: inherit;
  z-index: 5;
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

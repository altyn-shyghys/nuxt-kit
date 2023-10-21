<template>
  <UiSpace display="col" block="alt">
    <UiSpace display="row" pos="between">
      <UiSpace display="row" gap="sm">
        <div class="fb" style="width: 3.125rem; height: 3.125rem"></div>
        <UiSpace display="col" gap="bit">
          <div class="fb" style="width: 5rem; height: 1rem"></div>
          <div class="fb" style="width: 2rem; height: 1rem"></div>
        </UiSpace>
      </UiSpace>
      <UiSpace display="row" class="options">
        <div v-for="(_, i) in 2" :key="i" class="fb" style="width: 2rem; height: 2rem"></div>
      </UiSpace>
    </UiSpace>
    <UiSpace display="col" gap="bit">
      <div v-for="(_, i) in 5" :key="i" class="fb" style="width: 100%; height: 2rem"></div>
    </UiSpace>
  </UiSpace>
</template>

<style scoped lang="scss">
.fb {
  background-color: var(--fg-m);
  border-radius: var(--br-rad);
}
</style>

<template>
  <UiBlock layout="row" block="block" pos="left">
    <UiBlock :center="true" class="hide">
      <UiIcon :name="ICON_INFO" size="logo" />
    </UiBlock>
    <UiBlock layout="col" class="tip-content">
      <slot />
    </UiBlock>
  </UiBlock>
</template>

<style scoped lang="scss">
.tip-content {
  padding-left: var(--space);
  transition: var(--tr-fg);
  border-left: toRem(3) solid var(--txt-m);
  gap: toRem(5);
}

.hide {
  @media (max-width: $zf) {
    display: none;
  }
}
</style>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiScroll dir="right">
          <UiSpace display="row">
            <div v-for="(_, idx) in 15" :key="idx" class="card"></div>
          </UiSpace>
        </UiScroll>
        <UiScroll height="30dvh">
          <UiSpace display="col">
            <div v-for="(_, idx) in 15" :key="idx" class="card"></div>
          </UiSpace>
        </UiScroll>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<style lang="scss">
.card {
  width: toRem(100);
  min-width: toRem(100);
  height: toRem(100);
  border-radius: var(--br-rad);
  background-color: var(--txt-m);
}
</style>

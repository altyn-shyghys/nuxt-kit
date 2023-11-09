<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <div style="max-width: 20rem; width: 100%">
        <UiToggle
          v-model="ch"
          label="Тактильная отдача"
          name="somee"
          desc="Срабатывает при уведомлениях"
        />
      </div>
      <UiLine :dashed="true" />
      <UiSpace display="row">
        <UiButton title="Выйти" icon="tabler:logout" mode="link" />
        <UiLink to="/" title="Выйти" icon="tabler:logout" mode="hybrid" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
const ch = ref(false)
</script>

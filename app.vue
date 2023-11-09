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
    </UiSpace>
    <UiLine :dashed="true" />
    <UiButton title="Выйти" icon="tabler:logout" />
  </UiSpace>
</template>

<script setup lang="ts">
const ch = ref(false)

watch(ch, (n) => console.log(n))
</script>

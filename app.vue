<script setup lang="ts">
const flag = ref(false)
const someArr = ['Some', 'Hi', 'Gay', 'GI', 'sdfsdfs', 'Gigi', 'sdfss', 'Hell', 'Ahellow', 'Aboba']
const txt = ref('')

const change = () => {
  flag.value = !flag.value
  setTimeout(() => (flag.value = !flag.value), 3000)
}

const some = ref(someArr[0])
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" pos="left" :full="true">
        <UiButton title="Some" name="Some" :loading="flag" :icon="ICON_INFO" @trigger="change" />
        <!-- Some -->
        <UiSelect
          v-model="some"
          :options="someArr"
          :icon="ICON_INFO"
          width="10rem"
          :loading="flag"
        />
        <UiInput v-model="txt" name="Bob" label="Some" placeholder="Some" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

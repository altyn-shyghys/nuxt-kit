<script setup lang="ts">
const flag = ref(false)
const someArr: SelectOption[] = [
  { id: '1', name: 'Some', icon: ICON_INFO },
  { id: '2', name: 'sdfsdfsdfsd' },
  { id: '3', name: 'Привет' }
]

const change = () => {
  flag.value = !flag.value
  setTimeout(() => (flag.value = !flag.value), 3000)
}

const some: SelectOption = someArr[0]
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" pos="left" :full="true">
        <UiButton title="Some" name="Change" @trigger="change" />
        <!-- Some -->
        <UiSelect v-model="some" :options="someArr" width="10rem" :loading="flag" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

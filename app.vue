<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiSelect v-model="some" :icon="ICON_EMPTY" :options="somes" width="10rem" :sub="12" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
const somes = [
  'sdfdsf',
  'sdfdsf',
  'wefwf',
  'sfs sdfsdfsdf dsfsdf fds dsf dfsf',
  'sfsfsddsfsdfsdfsdfsdfdsfdsfds',
  'sdfsffdsf',
  'sdfsdsdfsd',
  'scvbcvbccvb',
  'werwrwerwer',
  'sfsfewwrerw'
]
const some = ref(somes[0])
</script>

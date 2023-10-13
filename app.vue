<script setup lang="ts">
const some = ref(false)
const newIn = ref('')
</script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <!-- Some -->
      <UiSpace display="col" pos="left">
        <!-- <CustomCheckbox v-model="some" name="some" label="Some" /> -->
        <!-- <nuxt-img
          src="https://images.ctfassets.net/cnu0m8re1exe/4vXydFwWGcMIu6ntT3097s/f2dc786b9d7e418011c18540fa4b996c/shutterstock_2124276926.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=pad"
          width="300"
          height="200"
          :placeholder="[300, 200, 75, 5]"
        /> -->
        <CustomLink to="#" title="Some" :icon="ICON_INFO" mode="icon" />
        <CustomCheckbox v-model="some" label="Some" name="hello" />
        <CustomInput
          v-model="newIn"
          name="Some"
          label="Some"
          placeholder="Some"
          :warn="newIn.length > 5"
        />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

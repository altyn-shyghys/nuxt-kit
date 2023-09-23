<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiSpace block="def">
          <Transition name="main" mode="out-in">
            <UiText
              v-if="sec"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias laborum quae fuga consequatur nulla suscipit vitae velit natus eos, unde repellendus aperiam, officiis labore sed odio. Debitis rerum aut, numquam incidunt et nulla obcaecati molestias. Libero assumenda alias similique consectetur accusantium asperiores! Fugiat corporis expedita natus veritatis? Facilis, ea laudantium nulla magni error libero sapiente rem ad laboriosam eos, explicabo ipsam, blanditiis qui eum magnam vel. Error quaerat, quidem amet praesentium eos rerum commodi ab, labore earum ipsam quas, facere nostrum alias aspernatur possimus a cum harum! Placeat nulla beatae molestiae a quisquam quaerat. Minus id recusandae illum necessitatibus in?"
            />
            <UiText
              v-else
              text="libero sapiente rem ad laboriosam eos, explicabo ipsam, blanditiis qui eum magnam vel. Error quaerat, quidem amet praesentium eos rerum commodi ab, labore earum ipsam quas, facere nostrum alias aspernatur possimus a cum harum! Placeat nulla beatae molestiae a quisquam quaerat. Minus id recusandae illum necessitatibus in?"
            />
          </Transition>
        </UiSpace>
        <button @click="sec = !sec">Change</button>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
const sec = ref<boolean>(false)
</script>

<style scoped lang="scss"></style>

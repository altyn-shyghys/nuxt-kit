<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiSpace display="col" mode="center">
          <UiText
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, excepturi!"
          />
          <UiText type="h1" text="Lorem ipsum dolor sit amet." />

          <UiText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, inventore illum vel veniam asperiores cupiditate, illo laboriosam magni quia qui consequatur! Explicabo optio sapiente vitae! Asperiores accusantium totam deserunt voluptatibus voluptatum nobis sunt officiis provident a nihil. Quasi aspernatur ducimus corporis hic beatae, adipisci vel, eius in totam repellat aut itaque id impedit consequuntur voluptas magnam odit veritatis distinctio pariatur ipsam. Qui exercitationem dicta ipsa placeat, omnis libero totam in tenetur corporis expedita, vitae debitis minima quam praesentium vero accusamus consequuntur aspernatur corrupti aliquid, dolore doloribus fugit. Facilis libero, harum, quam excepturi earum magnam modi repellat rem, adipisci alias a."
          />
          <UiSpace display="row">
            <UiButton title="" mode="icon" :icon="ICON_EMPTY" />
            <UiButton title="" :icon="ICON_EMPTY" name="Open model" @trigger="open = !open" />
          </UiSpace>
          <UiSpace display="row">
            <UiInput v-model="v" name="aboba" label="Some text" placeholder="Some" />
            <UiSelect v-model="s" :options="some" :icon="ICON_ERROR_LOAD" width="10rem" />
          </UiSpace>
        </UiSpace>
      </UiSpace>
    </UiSpace>
    <UiModal v-model="open" title="Some">
      <UiText
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, excepturi!"
      />
    </UiModal>
  </UiSpace>
</template>

<script setup lang="ts">
useHead({
  // htmlAttrs: { lang: () =>  },
  // title: () => $t(`route.${useRoute().name as string}`),
  // meta: [{ name: 'theme-color', content: () => $themeColor.value }],
  // bodyAttrs: { class: () => $themeMode.value }
})

const some = ref([
  'sdfdsff dfgfdgf fgdfg',
  'sdfsdfdsf dfgdfgdf dfgdfg',
  'sfsdfssd dfgfdg dfgdfgdfg',
  'sdfsdf dfgdfg dfgfdg f',
  'sdfdsfdfgfdg  dfgfdg',
  'sdfdsf dgfgfdgdfg dfgdfgf',
  'sdfdsd',
  'sdfsdfdsf',
  'sdfdsfsf',
  'sdfsfssdfd',
  'sdfdsfdfsf'
])

const s = ref(some.value[0])
const v = ref('')
const open = ref(false)
</script>

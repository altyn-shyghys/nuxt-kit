<template>
  <div id="kit">
    <AppOffline v-if="!isOnline" />
    <div v-else id="layout">
      <USpace layout="container">
        <USpace layout="wrapper">
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Buttons —" />
            <UText gray text="Icon mode (hover to see more details)" />
            <USpace display="row" mode="center" gap="sm" style="flex-wrap: wrap">
              <UButton title="Default icon-button" :icon="exIcon" mode="icon" />
              <UButton title="Disabled icon-button" :icon="exIcon" mode="icon" :disabled="button" />
              <UButton
                title="Loading state icon-button"
                :icon="exIcon"
                mode="icon"
                :loading="button"
              />
              <UButton title="Active icon-button" :icon="exIcon" mode="icon" state="active" />
              <UButton title="Active icon-button" :icon="exIcon" mode="icon" state="solid" />
            </USpace>
            <UText gray text="Button, Min & Link modes" />
            <USpace display="row" gap="sm" mode="center" style="flex-wrap: wrap">
              <UButton title="Default" />
              <UButton title="With Icon" :icon="exIcon" />
              <UButton title="Loading state" :icon="exIcon" :loading="button" />
              <UButton title="Disabled" :icon="exIcon" :disabled="button" />
              <UButton title="Active" :icon="exIcon" state="active" />
              <UButton title="Link-style" :icon="exIcon" state="active" mode="link" />
              <UButton mode="min" title="Min mode" />
              <UButton mode="min" title="Min mode" state="solid" />
              <UButton mode="min" :icon="exIcon" title="Min with Icon" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm" style="max-width: 40rem">
            <UText type="h2" text="— Texts —" />
            <UText gray text="These are just a few of the many options available" />
            <UText type="h1" text="Main Title Example" />
            <UText
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis at nesciunt officiis, vitae consectetur praesentium quod a vel cum!"
            />
            <UText gray text="...and other" />
          </USpace>
        </USpace>
      </USpace>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOnline = useOnline()

const exIcon = 'geo:ui-earth-east'
const button = ref<boolean>(true)

// const checkbox = ref<boolean>(true)
// const disCheckbox = ref<boolean>(false)

// const inputOne = ref<string>('')
// const inputTwo = ref<string>('')
// const inputThree = ref<string>('')

// const modal = ref<boolean>(false)

// const selOne: string[] = ['One', 'Two', 'Three', 'Four', 'Five']
// const selOneModel = ref<string>(selOne[0])
// const selTwo: string[] = [...selOne, 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
// const selTwoModel = ref<string>(selTwo[0])

// const toggleOne = ref<boolean>(false)
// const toggleTwo = ref<boolean>(false)
</script>

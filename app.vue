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
              <UButton title="Active icon-button" :icon="exIcon" mode="icon" active />
            </USpace>
            <UText gray text="Button, Min & Link modes" />
            <USpace display="row" gap="sm" mode="center" style="flex-wrap: wrap">
              <UButton title="Default" />
              <UButton title="With Icon" :icon="exIcon" />
              <UButton title="Loading state" :icon="exIcon" :loading="button" />
              <UButton title="Disabled" :icon="exIcon" :disabled="button" />
              <UButton title="Active" :icon="exIcon" active />
              <UButton title="Link-style" :icon="exIcon" active mode="link" />
              <UButton mode="min" title="Min mode" />
              <UButton mode="min" :icon="exIcon" title="Min with Icon" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Badges —" />
            <USpace display="row" mode="center" gap="sm" style="flex-wrap: wrap">
              <UBadge text="Default" />
              <UBadge :icon="exIcon" text="With icon" />
              <UBadge color="green" text="With color" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Accordions —" />
            <UAccordion title="Default">
              <USpace block="alt" full>
                <UText text="Some content" />
              </USpace>
            </UAccordion>
            <UAccordion title="With icon" :icon="exIcon">
              <USpace block="alt" full>
                <UText text="Some content" />
              </USpace>
            </UAccordion>
          </USpace>
          <USpace display="col" mode="center" gap="sm" :full="true">
            <UText type="h2" text="— Scrolls —" />
            <UText :gray="true" text="Horizontal (Hold 'Shift' for horizontal scroll)" />
            <USpace display="col" gap="sm" :full="true">
              <UScroll dir="right" height="5rem">
                <USpace display="row">
                  <div
                    v-for="(_, idx) in 15"
                    :key="idx"
                    style="
                      width: 5rem;
                      min-width: 5rem;
                      height: 5rem;
                      background-color: var(--fg-m);
                      border-radius: var(--br-rad);
                      border: 0.063rem solid var(--br);
                    "
                  ></div>
                </USpace>
              </UScroll>
              <USpace mode="center"><UText :gray="true" text="Vertical" /></USpace>
              <UScroll height="10rem">
                <USpace display="col">
                  <div
                    v-for="(_, idx) in 15"
                    :key="idx"
                    style="
                      width: 100%;
                      height: 5rem;
                      background-color: var(--fg-m);
                      border-radius: var(--br-rad);
                      border: 0.063rem solid var(--br);
                    "
                  ></div>
                </USpace>
              </UScroll>
            </USpace>
          </USpace>
          <USpace display="col" gap="sm">
            <UText type="h2" text="— Checkboxes —" />
            <USpace display="row" mode="center" style="flex-wrap: wrap">
              <UCheckbox v-model="checkbox" label="Default" name="cb" />
              <UCheckbox v-model="disCheckbox" label="Disabled" name="discb" :disabled="true" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Icons —" />
            <UText :gray="true" text="Hover to see more details" />
            <USpace display="row" mode="center" style="flex-wrap: wrap">
              <UIcon title="50px" :name="exIcon" size="md" />
              <UIcon title="40px" :name="exIcon" size="cb" />
              <UIcon title="UI size" :name="exIcon" size="ui" />
              <UIcon title="24px" :name="exIcon" />
              <UIcon title="16px" :name="exIcon" size="sm" />
            </USpace>
            <UText :gray="true" text="...and other" />
          </USpace>
          <USpace display="col" mode="center" gap="sm" :full="true">
            <UText type="h2" text="— Wrappers —" />
            <USpace display="row" mode="center" style="flex-wrap: wrap">
              <UWrapper title="Default">
                <USpace display="row" gap="sm" style="max-width: 15rem">
                  <UIcon :name="exIcon" size="md" />
                  <UText text="Here's an example wrapper!" />
                </USpace>
              </UWrapper>
              <UWrapper title="With tip and Color" block="def">
                <USpace display="row" gap="sm" style="max-width: 15rem">
                  <UIcon :name="exIcon" size="md" />
                  <UText text="Here's an example wrapper!" />
                </USpace>
              </UWrapper>
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm" :full="true">
            <UText type="h2" text="— Lines —" />
            <UText :gray="true" text="Solid" />
            <ULine />
            <UText :gray="true" text="Dashed" />
            <ULine mode="dashed" />
            <UText :gray="true" text="Not complete" />
            <ULine :full="false" />
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Screens —" />
            <UText :gray="true" text="Shows notifications in your device's language" />
            <USpace display="row" :full="true" style="flex-wrap: wrap">
              <UScreen />
              <UScreen type="error" />
              <UScreen type="empty" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm" style="max-width: 25rem">
            <UText type="h2" text="— Inputs —" />
            <USpace display="row" mode="center" style="flex-wrap: wrap">
              <UInput
                v-model="inputOne"
                placeholder="Example text"
                label="Default input"
                name="inputOne"
              />
              <UInput
                v-model="inputTwo"
                placeholder="Example Text"
                label="Input with warn state"
                name="inputTwo"
                :warn="true"
              />
              <UInput v-model="inputThree" placeholder="Without label" name="inputThree" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Tips —" />
            <USpace display="row" mode="center" style="flex-wrap: wrap; align-items: flex-start">
              <UTip
                title="Example witn Wave"
                message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, optio nesciunt! Labore non eum veritatis"
              />
              <UTip
                title="Example witnout Wave"
                :wave="false"
                message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, optio nesciunt! Labore non eum veritatis"
              />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Modal Ex. —" />
            <UText :gray="true" text="Includes different modes in Desktop & Mobile" />
            <USpace display="row" gap="sm" mode="center" style="flex-wrap: wrap">
              <UButton title="Default modal" :icon="exIcon" @trigger="modal = !modal" />
              <UButton
                title="Modal with action"
                :icon="exIcon"
                @trigger="actionModal = !actionModal"
              />
            </USpace>
            <UModal v-model="modal" title="Modal Ex">
              <USpace display="col" gap="sm" block="def" mode="center">
                <UIcon :name="exIcon" size="lg" />
                <UText type="span" text="Welcome to modal example!" />
                <UText
                  :gray="true"
                  text="Click on the cross button or on the space outside the window to close"
                />
              </USpace>
            </UModal>
            <UModal v-model="actionModal" title="Modal Ex">
              <USpace display="col" gap="sm" mode="center">
                <UIcon :name="exIcon" size="lg" />
                <UText type="span" text="Welcome to modal example!" />
                <UText
                  :gray="true"
                  text="Click on the cross button or on the space outside the window to close"
                />
              </USpace>
              <template #action>
                <UButton title="Close" :icon="exIcon" @trigger="actionModal = !actionModal" />
              </template>
            </UModal>
          </USpace>
          <USpace display="col" mode="center" gap="sm" :full="true">
            <UText type="h2" text="— Tables —" />
            <UText :gray="true" text="Shows tips in your device's language" />
            <USpace display="row" style="flex-wrap: wrap">
              <UTable title="Table With Options">
                <template #options>
                  <UButton title="Example" :icon="exIcon" mode="icon" />
                  <UButton title="Example" :icon="exIcon" mode="icon" />
                </template>
                <template #table>
                  <tr>
                    <th v-for="(_, idx) in 5" :key="idx"><UText :text="idx.toString()" /></th>
                  </tr>
                  <tr v-for="(_, tridx) in 15" :key="tridx">
                    <td v-for="(__, tdIdx) in 5" :key="tdIdx">
                      <UText :text="tdIdx.toString()" />
                    </td>
                  </tr>
                </template>
              </UTable>
              <UTable title="With Error (ex. case)" :error="true">
                <template #options>
                  <UButton title="Example" :icon="exIcon" mode="icon" />
                  <UButton title="Example" :icon="exIcon" mode="icon" />
                </template>
              </UTable>
              <UTable title="Print mode" :print="true">
                <template #options>
                  <UButton title="Example" :icon="exIcon" mode="icon" />
                  <UButton title="Example" :icon="exIcon" mode="icon" />
                </template>
                <template #table>
                  <tr>
                    <th v-for="(_, idx) in 5" :key="idx"><UText :text="idx.toString()" /></th>
                  </tr>
                  <tr v-for="(_, trIdx) in 10" :key="trIdx">
                    <td v-for="(__, tdIdx) in 5" :key="tdIdx">
                      <UText :text="tdIdx.toString()" />
                    </td>
                  </tr>
                </template>
              </UTable>
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Selects —" />
            <USpace display="row" mode="center" style="flex-wrap: wrap">
              <USelect
                v-model="selOneModel"
                :options="selOne"
                label="Without search and Icon"
                width="15rem"
              />
              <USelect
                v-model="selOneModel"
                :options="selOne"
                label="Infinite loading"
                width="15rem"
                :loading="true"
              />
              <USelect
                v-model="selOneModel"
                :options="selOne"
                label="Without search"
                :icon="exIcon"
                width="15rem"
              />
              <USelect
                v-model="selTwoModel"
                :options="selTwo"
                label="With search"
                :icon="exIcon"
                width="15rem"
              />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm" style="max-width: 40rem">
            <UText type="h2" text="— Texts —" />
            <UText :gray="true" text="These are just a few of the many options available" />
            <UText type="h1" text="Main Title Example" />
            <UText
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis at nesciunt officiis, vitae consectetur praesentium quod a vel cum!"
            />
            <UText :gray="true" text="...and other" />
          </USpace>
          <USpace display="col" mode="center" :full="true" gap="sm" style="max-width: 25rem">
            <UText type="h2" text="— Togglers —" />
            <UToggle
              v-model="toggle"
              name="toggle"
              label="Toggler with description"
              desc="Any important info"
            />
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Links —" />
            <UText gray text="Hover to see more details" />
            <USpace display="row" mode="center" style="flex-wrap: wrap">
              <ULink to="#" title="Default" />
              <ULink to="#" title="Icon" :icon="exIcon" mode="icon" />
              <ULink to="#" title="Text & icon" :icon="exIcon" mode="hybrid" />
            </USpace>
            <USpace display="row" mode="center">
              <ULink to="/" title="Page" :icon="exIcon" mode="page" />
              <ULink to="/" title="Index" :icon="exIcon" mode="index" />
            </USpace>
          </USpace>
          <USpace display="col" mode="center" gap="sm">
            <UText type="h2" text="— Tabs —" />
            <UTabs v-model="tab" :tabs="tabs" />
          </USpace>
        </USpace>
      </USpace>
    </div>
  </div>
</template>

<script setup lang="ts">
const exIcon = 'geo:ui-earth-east'
const isOnline = useOnline()

const button = ref<boolean>(true)

const checkbox = ref<boolean>(true)
const disCheckbox = ref<boolean>(false)

const inputOne = ref<string>('')
const inputTwo = ref<string>('')
const inputThree = ref<string>('')

const modal = ref<boolean>(false)
const actionModal = ref<boolean>(false)

const selOne: string[] = ['One', 'Two', 'Three', 'Four', 'Five']
const selOneModel = ref<string>(selOne[0])
const selTwo: string[] = [...selOne, 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
const selTwoModel = ref<string>(selTwo[0])
const toggle = ref<boolean>(false)

const tabs: UTab[] = [
  { name: 'Tab one', icon: exIcon },
  { name: 'Tab two', icon: exIcon }
]

const tab = ref<string>(tabs[0].name)
</script>

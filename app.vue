<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Buttons —" />
        <UiText :gray="true" text="Hover to see more details" />
        <UiSpace display="row" style="flex-wrap: wrap">
          <UiButton title="Default icon-button" :icon="ICON_CLOSE" mode="icon" />
          <UiButton
            title="Disabled icon-button"
            :icon="ICON_CLOSE"
            mode="icon"
            :disabled="button"
          />
          <UiButton
            title="Loading state icon-button"
            :icon="ICON_CLOSE"
            mode="icon"
            :loading="button"
          />
          <UiButton title="Active icon-button" :icon="ICON_CLOSE" mode="icon" state="active" />
          <UiButton title="Default button" :icon="ICON_CLOSE" name="Default" />
          <UiButton
            title="Loading state button"
            :icon="ICON_CLOSE"
            name="Loading"
            :loading="button"
          />
          <UiButton title="Disabled button" :icon="ICON_CLOSE" name="Disabled" :disabled="button" />
          <UiButton title="Active button" :icon="ICON_CLOSE" name="Active" state="active" />
        </UiSpace>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Checkboxes —" />
        <UiSpace display="row" style="flex-wrap: wrap">
          <UiCheckbox v-model="checkbox" label="Default" name="cb" />
          <UiCheckbox v-model="disCheckbox" label="Disabled" name="discb" :disabled="true" />
        </UiSpace>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Icons —" />
        <UiText :gray="true" text="Hover to see more details" />
        <UiSpace display="row" style="align-items: flex-end; flex-wrap: wrap">
          <UiIcon title="50px" :name="ICON_INFO" size="md" />
          <UiIcon title="40px" :name="ICON_INFO" size="cb" />
          <UiIcon title="UI size" :name="ICON_INFO" size="ui" />
          <UiIcon title="24px" :name="ICON_INFO" />
          <UiIcon title="16px" :name="ICON_INFO" size="sm" />
        </UiSpace>
        <UiText :gray="true" text="...and other" />
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Inputs —" />
        <UiSpace display="row" style="flex-wrap: wrap">
          <UiInput
            v-model="inputOne"
            placeholder="Some text"
            label="Default input"
            name="inputOne"
          />
          <UiInput
            v-model="inputTwo"
            placeholder="Some Text"
            label="Input with warn state"
            name="inputTwo"
            :warn="true"
          />
        </UiSpace>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Links —" />
        <UiText :gray="true" text="Hover to see more details" />
        <UiSpace display="row" style="flex-wrap: wrap">
          <UiLink to="#" title="Default" />
          <UiLink to="#" title="Icon" :icon="ICON_EMPTY" mode="icon" />
          <UiLink to="#" title="Text & icon" :icon="ICON_EMPTY" mode="hybrid" />
          <UiLink to="/" title="Page" :icon="ICON_EMPTY" mode="page" />
        </UiSpace>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Modal Ex. —" />
        <UiText :gray="true" text="Includes different modes in Desktop & Mobile" />
        <UiButton title="Some" :icon="ICON_CLOSE" name="Open modal" @trigger="modal = !modal" />
        <UiModal v-model="modal" title="Modal Ex">
          <UiText text="Some modal stuff..." />
        </UiModal>
      </UiSpace>
      <UiSpace display="col" gap="sm" :full="true">
        <UiText type="h2" text="— Scrolls —" />
        <UiText :gray="true" text="Horizontal (Hold 'Shift' for horizontal scroll)" />
        <UiScroll dir="right" height="5rem">
          <UiSpace display="row">
            <div
              v-for="(_, idx) in 15"
              :key="idx"
              style="
                width: 5rem;
                min-width: 5rem;
                height: 5rem;
                background-color: var(--txt-m);
                border-radius: var(--br-rad);
              "
            ></div>
          </UiSpace>
        </UiScroll>
        <UiText :gray="true" text="Vertical" />
        <UiScroll height="30dvh">
          <UiSpace display="col">
            <div
              v-for="(_, idx) in 15"
              :key="idx"
              style="
                width: 100%;
                height: 5rem;
                background-color: var(--txt-m);
                border-radius: var(--br-rad);
              "
            ></div>
          </UiSpace>
        </UiScroll>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Screens —" />
        <UiText :gray="true" text="Shows notifications in your device's language" />
        <UiSpace display="row" :full="true" style="flex-wrap: wrap">
          <UiScreen />
          <UiScreen type="error" />
          <UiScreen type="empty" />
        </UiSpace>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="— Selects —" />
        <UiSpace display="row" style="flex-wrap: wrap">
          <UiSelect
            v-model="selOneModel"
            :options="selOne"
            label="Without search and Icon"
            width="10rem"
          />
          <UiSelect
            v-model="selOneModel"
            :options="selOne"
            label="Infinite loading"
            width="10rem"
            :loading="true"
          />
          <UiSelect
            v-model="selOneModel"
            :options="selOne"
            label="Without search"
            :icon="ICON_CLOSE"
            width="10rem"
          />
          <UiSelect
            v-model="selTwoModel"
            :options="selTwo"
            label="With search"
            :icon="ICON_CLOSE"
            width="10rem"
          />
        </UiSpace>
      </UiSpace>
      <UiSpace display="col" gap="sm" pos="left" :full="true">
        <UiText type="h2" text="— Tables—" />
        <UiSpace display="row" style="flex-wrap: wrap" :full="true">
          <UiTable title="Table With Options">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
            <template #table>
              <tr>
                <th v-for="(_, idx) in 5" :key="idx"><UiText :text="idx.toString()" /></th>
              </tr>
              <tr v-for="(_, tridx) in 15" :key="tridx">
                <td v-for="(__, tdIdx) in 5" :key="tdIdx"><UiText :text="tdIdx.toString()" /></td>
              </tr>
            </template>
          </UiTable>
          <UiTable title="With Error (one of the possible cases)" :error="true">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
          </UiTable>
        </UiSpace>
      </UiSpace>
      <!-- <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="Texts" />
        <UiText type="h1" text="H1 text" />
        <UiText type="h2" text="H2 text" />
        <UiText type="h3" text="H3 text" />
        <UiText type="h4" text="H4 text" />
        <UiText type="h5" text="H5 text" />
        <UiText type="h6" text="H6 text" />
        <UiText type="p" text="P text" />
        <UiText type="p" :gray="true" text="P text with gray color (avaliable for all types)" />
        <UiText text="Small text" />
        <UiText type="label" text="Label text (use with for attribute)" />
      </UiSpace> -->
      <!-- <UiSpace display="col" gap="sm" pos="left">
        <UiText type="h2" text="Tips" />
        <UiTip title="Tip Title" message="Some important info (example witn Wave)" />
        <UiTip
          title="Tip Title"
          :wave="false"
          message="Some important info (example witnout Wave)"
        />
      </UiSpace> -->
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
const button = ref(true)

const checkbox = ref(true)
const disCheckbox = ref(false)

const inputOne = ref('')
const inputTwo = ref('')

const modal = ref(false)

const selOne = ['One', 'Two', 'Three', 'Four', 'Five']
const selOneModel = ref(selOne[0])
const selTwo = [...selOne, 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
const selTwoModel = ref(selTwo[0])
</script>

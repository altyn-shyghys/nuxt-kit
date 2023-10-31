# Nuxt Kit

### Under development

## Example template
```vue
<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true" pos="left">
        <UiSpace display="row">
          <UiText type="h2" text="Buttons" />
          <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
          <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" :disabled="button" />
          <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" :loading="button" />
          <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" state="active" />
          <UiButton title="Some" :icon="ICON_CLOSE" name="Default" />
          <UiButton title="Some" :icon="ICON_CLOSE" name="Some text" :loading="button" />
          <UiButton title="Some" :icon="ICON_CLOSE" name="Disabled" :disabled="button" />
          <UiButton title="Some" :icon="ICON_CLOSE" name="Active" state="active" />
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Checkbox" />
          <UiCheckbox v-model="checkbox" label="Default checkbox" name="cb" />
          <UiCheckbox v-model="disCheckbox" label="Disabled state" name="discb" :disabled="true" />
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Icons" />
          <UiIcon :name="ICON_INFO" />
          <UiIcon :name="ICON_INFO" size="ui" />
          <UiIcon :name="ICON_INFO" />
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Inputs" />
          <UiInput v-model="input" placeholder="Some text" label="Some Text" name="inpt" />
          <UiInput
            v-model="input"
            placeholder="With password type"
            type="password"
            label="Some Text"
            name="npt"
          />
          <UiInput
            v-model="input"
            placeholder="With warn"
            label="Some Text"
            name="inpt"
            :warn="true"
          />
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Links" />
          <UiLink to="#" title="Some link" />
          <UiLink to="#" title="Some link" :icon="ICON_EMPTY" />
          <UiLink to="#" title="Some link" :icon="ICON_EMPTY" mode="icon" />
          <UiLink to="#" title="Some link" :icon="ICON_EMPTY" mode="hybrid" />
          <UiLink to="#" title="Some link" :icon="ICON_EMPTY" mode="page" />
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Modal" />
          <UiButton title="Some" :icon="ICON_CLOSE" name="Open modal" />
          <UiModal v-model="modal" title="Modal Ex">
            <UiText type="h2" text="Some modal stuff..." />
          </UiModal>
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Scrolls" />
          <UiLink to="#" title="Some link" />
          <UiScroll dir="right">
            <div
              v-for="(_, idx) in 15"
              :key="idx"
              style="width: 5rem; height: 5rem; border-radius: var(--br-rad)"
            ></div>
          </UiScroll>
          <UiScroll height="30dvh">
            <div
              v-for="(_, idx) in 15"
              :key="idx"
              style="width: 5rem; height: 5rem; border-radius: var(--br-rad)"
            ></div>
          </UiScroll>
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Screens" />
          <UiScreen />
          <UiScreen type="error" />
          <UiScreen type="empty" />
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Selects" />
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
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Tables" />
          <UiTable title="Default">
            <template #table>
              <tr>
                <th v-for="(_, idx) in 5" :key="idx"><UiText :text="idx.toString()" /></th>
              </tr>
              <tr v-for="(_, tridx) in 5" :key="tridx">
                <td v-for="(__, tdIdx) in 5" :key="tdIdx"><UiText :text="tdIdx.toString()" /></td>
              </tr>
            </template>
          </UiTable>
          <UiTable title="With Options">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
            <template #table>
              <tr>
                <th v-for="(_, idx) in 5" :key="idx"><UiText :text="idx.toString()" /></th>
              </tr>
              <tr v-for="(_, tridx) in 5" :key="tridx">
                <td v-for="(__, tdIdx) in 5" :key="tdIdx"><UiText :text="tdIdx.toString()" /></td>
              </tr>
            </template>
          </UiTable>
          <UiTable title="With Scroll">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
            <template #table>
              <tr>
                <th v-for="(_, idx) in 15" :key="idx"><UiText :text="idx.toString()" /></th>
              </tr>
              <tr v-for="(_, tridx) in 15" :key="tridx">
                <td v-for="(__, tdIdx) in 15" :key="tdIdx"><UiText :text="tdIdx.toString()" /></td>
              </tr>
            </template>
          </UiTable>
          <UiTable title="Infinite loading" :loading="true">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
            <template #table>
              <!-- Some code -->
            </template>
          </UiTable>
          <UiTable title="With Error" :error="true">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
            <template #table>
              <!-- Some code -->
            </template>
          </UiTable>
          <UiTable title="With empty data" :lenght="0">
            <template #options>
              <UiButton title="Some" :icon="ICON_CLOSE" mode="icon" />
              <UiButton title="Some" :icon="ICON_EMPTY" mode="icon" />
            </template>
            <template #table>
              <!-- Some code -->
            </template>
          </UiTable>
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
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
        </UiSpace>
        <UiLine :full="true" />
        <UiSpace display="col" gap="sm">
          <UiText type="h2" text="Tips" />
          <UiTip title="Tip Title" message="Some important info (example witn Wave)" />
          <UiTip
            title="Tip Title"
            :wave="false"
            message="Some important info (example witnout Wave)"
          />
        </UiSpace>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<script setup lang="ts">
const button = ref(true)
const checkbox = ref(false)
const disCheckbox = ref(false)
const input = ref('')
const modal = ref(false)
const selOne = ['One', 'Two', 'Three', 'Four', 'Five']
const selOneModel = ref(selOne[0])
const selTwo = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Mx']
const selTwoModel = ref(selTwo[0])
</script>
```
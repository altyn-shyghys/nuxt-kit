<script setup lang="ts"></script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" pos="left" :full="true">
        <!-- Some -->
        <UiTable title="Test Table">
          <template #options>
            <UiButton title="Some" mode="icon" :icon="ICON_INFO" />
            <UiButton title="Some" mode="icon" :icon="ICON_LOADING_CIRCLE" />
          </template>
          <template #table>
            <tr>
              <th><UiText type="h4" text="report.param" /></th>
              <th><UiText type="h4" text="report.status" /></th>
              <th><UiText type="h4" text="report.comment" /></th>
            </tr>
            <tr v-for="(note, noteIdx) in 10" :key="noteIdx">
              <td><UiText text="Hiiii" /></td>
              <td>
                <UiText text="note.status ? 'OK' : 'NOK'" />
              </td>
              <td><UiText text="—" /></td>
            </tr>
          </template>
        </UiTable>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

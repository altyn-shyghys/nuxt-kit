<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiTable title="Some">
          <template #options>
            <UiButton title="report.option" mode="icon" icon="tabler:table-options" />
            <UiButton title="report.option" mode="icon" icon="mingcute:add-fill" />
          </template>
          <template #table>
            <tr>
              <th><UiText type="h4" text="Param" /></th>
              <th><UiText type="h4" text="Status" /></th>
              <th><UiText type="h4" text="Comment" /></th>
            </tr>
            <tr v-for="(note, noteIdx) in 10" :key="noteIdx">
              <td><UiText text="note.obsParam" /></td>
              <td>
                <UiText text="note.status ? 'OK' : 'NOK'" />
              </td>
              <td><UiText text="note.comment || '—'" /></td>
            </tr>
          </template>
        </UiTable>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

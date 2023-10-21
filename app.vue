<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" :full="true">
        <UiButton title="" mode="icon" :icon="ICON_EMPTY" />
        <UiTable title="Some">
          <template #options>
            <UiButton title="report.option" mode="icon" icon="tabler:table-options" />
            <UiButton title="report.option" mode="icon" icon="mingcute:add-fill" />
          </template>
          <template #table>
            <tr>
              <th><UiText text="Параметр" /></th>
              <th><UiText text="Статус" /></th>
              <th><UiText text="Комментарий" /></th>
            </tr>
            <tr>
              <td colspan="3" style="background-color: var(--fg-m); text-align: center">
                <UiText text="Результаты" />
              </td>
            </tr>
            <tr>
              <td><UiText text="Достижение показателей" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td><UiText text="Статус по плану работ" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td colspan="3" style="background-color: var(--fg-m); text-align: center">
                <UiText text="Оборудование и процессы" />
              </td>
            </tr>
            <tr>
              <td><UiText text="Исправность оборудования" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td><UiText text="Обеспеченность материально-техническими ресурсами" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td><UiText text="Качество" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td><UiText text="Потери материально-технических ресурсов" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td><UiText text="Простои" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td colspan="3" style="background-color: var(--fg-m); text-align: center">
                <UiText text="Безопасность и порядок" />
              </td>
            </tr>
            <tr>
              <td><UiText text="Порядок и чистота на рбочих местах" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
            <tr>
              <td><UiText text="Соблюдение сотрудниками правил ОТиТБ" /></td>
              <td style="background-color: var(--red); text-align: center">
                <UiText text="NOK" />
              </td>
              <td><UiText text="_" /></td>
            </tr>
          </template>
        </UiTable>
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

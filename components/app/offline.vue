<template>
  <USpace layout="screen">
    <USpace display="col" mode="center">
      <NoInternetConnection style="width: 5rem; height: 5rem" />
      <UText type="h4" text="app.offline.title" />
      <UText :gray="true" text="app.offline.desc" />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
import NoInternetConnection from '@/assets/graphics/connection.vue'
</script>

<script setup lang="ts"></script>

<template>
  <UiSpace layout="container">
    <UiSpace layout="wrapper">
      <UiSpace display="col" pos="left">
        <CustomLink to="#" title="Some" :icon="ICON_INFO" mode="icon" />
        <CustomLink to="#" title="Some" text="Some text" :icon="ICON_INFO" mode="hybrid" />
        <CustomLink to="#" title="Some" text="Some text" mode="text" />
        <CustomLink to="/" title="Some" :icon="ICON_INFO" mode="page" />
        <CustomLink to="/about" title="Some" :icon="ICON_INFO" text="Multi" mode="page" />
        <UiText type="h6" text="About" />
        <CustomButton :icon="ICON_INFO" name="Learn more" :active="true" title="" />
      </UiSpace>
    </UiSpace>
  </UiSpace>
</template>

<template>
  <v-app>
    <SideBar />
    <TopBar />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import TopBar from './TopBar.vue'
import SideBar from './SideBar.vue'
import DefaultView from './View.vue'
</script>

<template>
  <v-app>
    <TopBar />
    <SideBar />

    <v-main class="mx-auto">
      <router-view />
    </v-main>

  </v-app>
</template>

<script lang="ts" setup>
import TopBar from './TopBar.vue'
import SideBar from './SideBar.vue'
</script>

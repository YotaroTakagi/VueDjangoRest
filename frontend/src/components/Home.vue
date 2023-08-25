<template>
    <h1>HOME</h1>
    <v-btn color="primary" @click="overlay = !overlay">btn</v-btn>
    <v-overlay :model-value="overlay" class="align-center justify-center">
        <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>
  
<script lang="ts" setup>
import { watchEffect } from 'vue';
import { ref } from 'vue';

const overlay = ref(false);
watchEffect((value) => {
    setTimeout(() => {
        overlay.value = false
    }, 1000)
})
</script>
  
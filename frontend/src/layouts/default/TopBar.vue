<template>
    <v-app-bar title="Application bar" :order="order">
        <template v-slot:append>
            <v-switch v-model="order" hide-details inset label="switch" trueValue="0" falseValue="-1">
            </v-switch>
            <v-btn icon="mdi-account-circle" />
        </template>
    </v-app-bar>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const order = ref(0);
</script>
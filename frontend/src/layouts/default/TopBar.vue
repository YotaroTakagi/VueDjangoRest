<template>
    <v-app-bar title="Application bar" :order="order">
        <template v-slot:append>
            <Search />
            <v-switch v-model="order" hide-details inset label="switch" trueValue="0" falseValue="-1">
            </v-switch>
            <v-btn icon="mdi-account-circle" />
        </template>
        <DigitalClock />
    </v-app-bar>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import DigitalClock from '@/components/DigitalClock.vue'
import Search from '@/components/Search.vue'

const order = ref(0);
</script>
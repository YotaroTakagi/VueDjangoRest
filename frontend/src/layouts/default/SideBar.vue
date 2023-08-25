<template>
    <v-navigation-drawer location="left">
        <v-list>
            <v-list-item v-for="item in items" active-color="primary" :to="item.path" exact>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';


// メニューアイテム
const items = [
    {
        title: 'HOME',
        path: '/',
        value: 1,
        props: {
            prependIcon: 'mdi-home',
        }
    },
    {
        title: 'HOME2',
        path: '/analysis',
        value: 2,
    },
    {
        title: 'HOME3',
        path: '/blog',
        value: 3,
    },
    {
        title: 'POST',
        path: '/post-content',
        value: 3,
    },
];

</script>
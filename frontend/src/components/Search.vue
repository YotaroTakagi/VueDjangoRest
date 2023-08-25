<template>
    <v-text-field density="compact" variant="solo" placeholder="search" append-inner-icon="mdi-magnify"
        :loading="is_loading" @click:append-inner="onClick">
    </v-text-field>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// ロードフラグ
const is_loading = ref(false);

// 検索欄クリック
const onClick = () => {
    // ロード中
    is_loading.value = true;

    setTimeout(() => {
        // ロード終了
        is_loading.value = false;
    }, 2000)
}


</script>
<template>
    {{ date }}
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// 日時変数
const date = ref('');

const updateTime = () => {
    // 現在日時取得
    let current_date = new Date();
    // 曜日取得
    const day = convertDay(current_date);

    date.value = current_date.getFullYear() +
        '/' + ('0' + (current_date.getMonth() + 1)).slice(-2) +
        '/' + ('0' + current_date.getDate()).slice(-2) + `(${day})` +
        ('0' + current_date.getHours()).slice(-2) + ':' +
        ('0' + current_date.getMinutes()).slice(-2) + ':' +
        ('0' + current_date.getSeconds()).slice(-2);

}

const convertDay = (date: Date) => {
    const day_number = date.getDay();
    const day_str = ['日', '月', '火', '水', '木', '金', '土'][day_number]

    return day_str
}

onMounted(() => {
    updateTime();
})

setInterval(() => {
    updateTime();
}, 1000)

</script>
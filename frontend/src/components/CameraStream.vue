<template>
    <video ref="video" autoplay width="960" height="960"></video>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"

const video = ref();
const audio = ref();

onMounted(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        }).then(stream => {
            if (video.value && video.value !== null) {
                video.value.srcObject = stream;
                video.value.play()
            }
        });
    }
});

</script>
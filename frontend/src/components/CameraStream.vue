<template>
    <v-btn @click="showStream">start</v-btn>
    <v-select label="camera" :items="cameraOptions" item-title="title" item-value="value"
        v-model="selectedValue"></v-select>
    <video ref="video" autoplay width="960" height="960"></video>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue"

const video = ref();
const selectedValue = ref('');
const cameraOptions = ref<{ title: string; value: string }[]>([]);
const peerConnection = new RTCPeerConnection();

const getCameraDavices = async () => {
    await navigator.mediaDevices.enumerateDevices(
    ).then((devices) => {
        const cameras = devices.filter(device => device.kind === 'videoinput');
        cameraOptions.value = cameras.map(camera => ({
            title: camera.label || `カメラ ${cameras.indexOf(camera) + 1}`,
            value: camera.deviceId
        }))
    }).catch((error) => {
        console.error('カメラデバイス取得エラー: ', error);
    })
}

const showStream = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: { deviceId: selectedValue.value }
        }).then(stream => {
            if (video.value && video.value !== null) {
                video.value.srcObject = stream;
                video.value.play()

                stream.getTracks().forEach(track => {
                    peerConnection.addTrack(track, stream);
                });
                peerConnection.createOffer()
                    .then(offer => peerConnection.setLocalDescription(offer))
                    .then(() => {
                        // オファーをシグナリングサーバー経由で送信
                    });
            }
        });
    }

}


onMounted(() => {
    getCameraDavices();
});

</script>
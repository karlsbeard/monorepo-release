<template>
    <h1>Video for Demo</h1>
    <div>
        <video width="500" controls>
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';

const videoSrc = ref('https://www.w3schools.com/html/movie.mp4');


</script>
<template lang="pug">
.index-container
  CustomTransition
  .video-container
    video(autoplay muted loop playsinline src="crt.mp4")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped lang="scss">
@use '/assets/sass/app';
@use '/assets/sass/variables' as vars;

.index-container {
  background-color: #000;
  width: 100%;
  overflow: hidden;
}

.video-container {
  width: 100%;
  height: 93dvh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

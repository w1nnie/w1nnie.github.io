<template lang="pug">
.container
  .item.a
    img(src="images/about/atmos_1.png")

  .text-container.b
    .head 世界観の作り込みは丁寧に
    .main ただキャラクターや背景のデザインに力を入れるだけでなく、文化などまで掘り下げて説得力のある世界観を作ります。
  .item.c
    img(src="images/about/atmos_2.png")
  .item.d
    img(src="images/about/atmos_3.png")

</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'PageAtmosphere',
    data() {
      return {

      }
    },
    methods: {}
  })
</script>

<style scoped lang="scss">
@import "~/assets/sass/app";

.container {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  display: grid;
  grid-template-areas:
    "a b"
    "c d";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5%;
  animation: rotate 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
}

.item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: inset 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 7%;
  overflow: hidden;
  text-align: center;
  border: 1px solid $deep-grid-color;
  background-color: $bg-color;

  .head {
    font-size: 2.2vw;
    width: 100%;
  }

  .main {
    font-size: 1.03vw;
    width: 100%;
    margin-top: 5%;
  }
}

.a {
  grid-area: a;
}

.b {
  grid-area: b;
}

.c {
  grid-area: c;
}

.d {
  grid-area: d;
}

@include smartphone {
  .container {
    grid-template-areas:
      "b"
      "a"
      "c"
      "d";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1%;
  }

  .text-container {
    .head {
      font-size: 4vw;
    }

    .main {
      font-size: 3.1vw;
    }
  }
}

@keyframes inset {
  0% {
    transform: translateX(-150px);
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    clip-path: inset(0);
    opacity: 1;
  }
}

</style>

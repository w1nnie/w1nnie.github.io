<template lang="pug">
.container
  .item
    .door.left
    .door.right
    img(src="images/about/atmos_1.png")

  .text-container
    .head 世界観の作り込みは丁寧に
    .main ただキャラクターや背景のデザインに力を入れるだけでなく、文化などまで掘り下げて説得力のある世界観を作ります。
  .item
    .door.left
    .door.right
    img(src="images/about/atmos_2.png")
  .item
    .door.left
    .door.right
    img(src="images/about/atmos_3.png")

</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Atmosphere',
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5%;
}

.item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .door {
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: 10000;
    background-color: #f6f6f6;
  }

  .left {
    left: 0;
    animation: leftSlide 0.3s cubic-bezier(0, 0.24, 0.16, 0.99);
    transform: translateX(-100%);
  }

  .right {
    right: 0;
    animation: rightSlide 0.3s cubic-bezier(0, 0.24, 0.16, 0.99);
    transform: translateX(100%);
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 10%;
  text-align: center;
  border: 1px solid #333;

  .head {
    font-size: 2.5em;
    width: 100%;
  }

  .main {
    font-size: 1.15em;
    width: 100%;
    margin-top: 5%;
  }
}

@keyframes leftSlide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes rightSlide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}

</style>

<template lang="pug">
  .container
    .item.a
      img(src="images/about/direction_a.gif")
    .item.b
      img(src="images/about/direction_b.gif")
    .text-container.c
      .head 印象に残す演出
      .main 常に新たな表現や突飛な演出を探りながら作品を作っています。
    .item.d
      img(src="images/about/direction_d.gif")
    .item.e
      img(src="images/about/direction_e.gif")
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Direction',
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
    "a b c"
    "d d e"
    "d d e";
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  overflow: hidden;

  // image-rendering: pixelated;
}

.item {
  background-color: navy;
  animation: inset 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
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
    font-size: 2em;
    width: 100%;
  }

  .main {
    font-size: 1.1em;
    width: 100%;
    margin-top: 5%;
  }
}

img {
  width: 100%;
  height: auto;
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

.e {
  grid-area: e;
}

@keyframes inset {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  100% {
    clip-path: inset(0);
  }
}

</style>

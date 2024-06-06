<template lang="pug">
  .container
    .item.a
      img(src="images/about/animation_a.gif")
    .item.b
      img(src="images/about/animation_b.gif")
    .text-container.c
      .head なんでもアニメーション
      .main あらゆるキャラクターの動作や自然の動きをドット絵に落とし込んでループさせることが好きです。
    .item.d
      img(src="images/about/animation_d.gif")
    .item.e
      img(src="images/about/animation_e.gif")
    .item.f
      img(src="images/about/animation_f.gif")
    .item.g
      img(src="images/about/animation_g.gif")
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Animation',
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
    "d e f"
    "d e g";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3%;
  animation: rotate 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
}

.item {
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
    font-size: 1.7vw;
    width: 100%;
  }

  .main {
    font-size: 0.95vw;
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

.f {
  grid-area: f;

  img {
    transform: translateY(-3%);
  }
}

.g {
  grid-area: g;
}

@include smartphone {
  .container {
    grid-template-areas:
      "c"
      "a"
      "b"
      "f";
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

  .d,
  .e,
  .g {
    display: none;
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

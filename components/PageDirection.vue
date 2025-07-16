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
  name: 'PageDirection',
  data() {
    return {}
  },
  methods: {},
})
</script>

<style scoped lang="scss">
@use '/assets/sass/app';
@use '/assets/sass/variables' as vars;
@use '/assets/sass/common' as cm;

.container {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  display: grid;
  grid-template-areas:
    'a b c'
    'd d e'
    'd d e';
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  overflow: hidden;
  animation: rotate 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
}

.item {
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
  text-align: center;
  border: 1px solid vars.$deep-grid-color;
  background-color: vars.$bg-color;

  .head {
    font-size: 1.8vw;
    width: 100%;
  }

  .main {
    font-size: 1vw;
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

@include cm.smartphone {
  .container {
    grid-template-areas:
      'c'
      'd'
      'a'
      'b';
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

  .e {
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

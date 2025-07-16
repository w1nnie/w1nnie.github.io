<template lang="pug">
  .container
    .border
    .border-leftTop
    .border-rightTop
    .border-leftBottom
    .border-rightBottom
    .id-card
      .icon.a(style="background-image:url(chara.png); background-size:cover; background-repeat:no-repeat; background-position:50% 50%;")
      .b
        .occupation Pixel Artist
        .name しろねぎ
      .c
        .text-container 主に非日常的な世界観やループアニメーション、クォータービューのドット絵を好んで制作している。 <br> ドット絵のMVや配信用の動画素材、イラストなど幅広く仕事を募集している。 <br> 日々目新しい表現を探しながら散歩をする。
          .backline
      .d
        .banner-container
          a.banner.x(href="https://x.com/wh_negi" target="_blank")
            img(src="images/about/logo-x.png")
          a.banner.twitch(href="https://www.twitch.tv/wh_negi" target="_blank")
            img(src="images/about/logo-twitch.png")
          a.banner.booth(href="https://winnie.booth.pm/" target="_blank")
            img(src="images/about/logo-booth.png")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'PageProfile',
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
  width: calc(72vw * 0.89);
  height: calc(40vw * 0.9);
  position: absolute;
  margin: 0;
  left: 5.5%;
  top: 5%;
  background-color: rgb(246 246 246 / 100%);
  animation: rotate 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
}

.border {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid vars.$grid-color;
}

%corner-border {
  position: absolute;
  width: 30px;
  height: 30px;
}

.border-leftTop {
  @extend %corner-border;

  border-top: 2px solid vars.$deep-grid-color;
  border-left: 2px solid vars.$deep-grid-color;
  top: -1px;
  left: -1px;
}

.border-rightTop {
  @extend %corner-border;

  border-top: 2px solid vars.$deep-grid-color;
  border-right: 2px solid vars.$deep-grid-color;
  top: -1px;
  right: -1px;
}

.border-leftBottom {
  @extend %corner-border;

  border-bottom: 2px solid vars.$deep-grid-color;
  border-left: 2px solid vars.$deep-grid-color;
  bottom: -1px;
  left: -1px;
}

.border-rightBottom {
  @extend %corner-border;

  border-bottom: 2px solid vars.$deep-grid-color;
  border-right: 2px solid vars.$deep-grid-color;
  bottom: -1px;
  right: -1px;
}

.id-card {
  background: vars.$bg-color;
  position: absolute;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  transition: all 0.2s;
  display: grid;
  grid-template-areas:
    'a b b b'
    'c c c d'
    'c c c d';
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  gap: 2%;
  padding: 5%;
  border: 1px solid vars.$deep-grid-color;
  box-shadow: 2px 2px vars.$deep-grid-color;
}

.a {
  // background-image: url("/chara.png");background-imagebackground-imagebackground-imagebackground-imagebackground-image
  // background-size: contain;background-sizebackground-sizebackground-sizebackground-sizebackground-size
  // background-repeat: no-repeat;background-repeatbackground-repeatbackground-repeatbackground-repeatbackground-repeat
  // background-position: 50% 50%;background-positionbackground-positionbackground-positionbackground-positionbackground-position
  // grid-area: a;//grid-area//grid-area//;
  grid-area: a;
  border: 1px solid vars.$deep-grid-color;
}

.b {
  grid-area: b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .occupation {
    font-size: 1.5vw;
    display: flex;
    align-items: center;
    height: 20%;
    border: 1px solid vars.$deep-grid-color;
    padding: 2%;
  }

  .name {
    font-size: 4.3vw;
    display: flex;
    align-items: center;
    height: 70%;
    border: 1px solid vars.$deep-grid-color;
  }
}

.c {
  position: relative;
  grid-area: c;
  border: 1px solid vars.$deep-grid-color;

  .text-container {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    font-size: 1.3vw;

    .backline {
      position: absolute;
      top: 1.3vw;
      width: 100%;
      height: 80%;
      background-image: repeating-linear-gradient(
        0deg,
        vars.$grid-color,
        vars.$grid-color 1px,
        transparent 1px,
        transparent 1.96vw
      );
    }
  }
}

.d {
  grid-area: d;
  border: 1px solid vars.$deep-grid-color;
}

.banner-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .banner {
    position: relative;
    width: 3vw;
    height: 3vw;
    border: 1px solid vars.$deep-grid-color;
    box-shadow: 2px 2px vars.$deep-grid-color;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      box-shadow: 0 0 vars.$deep-grid-color;
      transform: translate(2px, 2px);
    }
  }

  .x {
    background-color: #fff;

    img {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
    }
  }

  .twitch {
    background-color: #f0f0ff;

    img {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      image-rendering: pixelated;
    }
  }

  .booth {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@include cm.smartphone {
  .container {
    width: 72vw;
    height: 50vw;
    left: 0;
  }

  .id-card {
    width: 95%;
    height: 95%;
    left: 2.5%;
    top: 2.5%;
  }

  .b {
    .occupation {
      font-size: 2vw;
    }
  }

  .c {
    .text-container {
      font-size: 2.2vw;

      .backline {
        position: absolute;
        top: 0.9vw;
        width: 100%;
        height: 80%;
        background-image: repeating-linear-gradient(
          0deg,
          vars.$grid-color,
          vars.$grid-color 1px,
          transparent 1px,
          transparent 3.3vw
        );
      }
    }
  }

  .d {
    .banner {
      width: 5vw;
      height: 5vw;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate3d(0, 1, 0, 270deg);
    opacity: 0;
  }

  100% {
    transform: rotate3d(0, 0, 0, 0);
    opacity: 1;
  }
}

@keyframes hover {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.05);
  }
}
</style>

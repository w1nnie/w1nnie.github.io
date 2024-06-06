<template lang="pug">
.about-container
  CustomTransition
  .pixel-container
    .pixel(v-for="index in pixelNumbers" :style="{opacity: pixelOpacity,display: pixelDisplay}")
      p(v-if="index == 29") プロフィール
      p(v-if="index == 31") 世界観
      p(v-if="index == 33") アニメーション
      p(v-if="index == 35") 演出
      .button(v-if="index == 20" @click="descend(),profile()")
      .button(v-if="index == 22" @click="descend(),atmosphere()")
      .button(v-if="index == 24" @click="descend(),animation()")
      .button(v-if="index == 26" @click="descend(),direction()")
  .property(:style="{opacity: propertyOpacity}")
    .profile-container.about-property(:style="{display: profileDisplay}")
      Profile
      .revbutton(@click="profile(),ascend()")
    .atmosphere-container.about-property(:style="{display: atmosDisplay}")
      Atmosphere
      .revbutton(@click="atmosphere(),ascend()")
    .animation-container.about-property(:style="{display: animationDisplay}")
      Animation
      .revbutton(@click="animation(),ascend()")
    .direction-container.about-property(:style="{display: directionDisplay}")
      Direction
      .revbutton(@click="direction(),ascend()")
  .deco
    .square1
    .square2
</template>

<script>
import Vue from 'vue'
import Atmosphere from '/components/atmosphere.vue'

export default Vue.extend({
  name: 'AboutPage',
  data() {
    return {
      pixelNumbers: 45,
      pixelDisplay: "block",
      pixelOpacity: 1,
      atmosDisplay: "none",
      animationDisplay: "none",
      directionDisplay: "none",
      profileDisplay: "none",
      propertyOpacity: 1
    }
  },
  mounted() {
    if(window.innerWidth < 768){
      this.profileDisplay = "block";
      this.atmosDisplay = "block";
      this.animationDisplay = "block";
      this.directionDisplay = "block";
      console.log("block");
    }
  },
  methods: {
    descend() {
      this.propertyOpacity = 1;
      this.pixelOpacity = 0;
      console.log("clicked");
      setTimeout(() => {
        this.pixelDisplay = "none";
      }, 500);
    },
    ascend() {
      this.pixelDisplay = "block";
      this.pixelOpacity = 1;
      this.propertyOpacity = 0;
      setTimeout(() => {
        this.propertyDisplay = "none";
      }, 500);
    },
    atmosphere() {
      if(this.atmosDisplay == "none") {
        this.atmosDisplay = "block";
      } else {
        setTimeout(() => {
          this.atmosDisplay = "none";
        }, 500);
      }
    },
    animation() {
      if(this.animationDisplay == "none") {
        this.animationDisplay = "block";
      } else {
        setTimeout(() => {
          this.animationDisplay = "none";
        }, 500);
      }
    },
    direction() {
      if(this.directionDisplay == "none") {
        this.directionDisplay = "block";
      } else {
        setTimeout(() => {
          this.directionDisplay = "none";
        }, 500);
      }
    },
    profile() {
      if(this.profileDisplay == "none") {
        this.profileDisplay = "block";
      } else {
        setTimeout(() => {
          this.profileDisplay = "none";
        }, 500);
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import "~/assets/sass/app";

.about-container {
  @extend %grid;

  overflow: hidden;
  width: 100vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  user-select: none;
}

.pixel-container {
  position: absolute;
  bottom: calc((100% - 40vw)/2 - 1.68vw);
  left: calc(14vw + 1px);
  width: 72vw;
  height: 40vw;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 8vw;
  transition: all 0.3s ease-out;
  z-index: 2;

  .pixel {
    overflow: hidden;
    transition: all 0.2s;
    user-select: none;
    background-size: cover;
    border: 1px solid $grid-color;
    background-color: rgb(246 246 246 / 60%);

    &:nth-child(even) {
      background-color: #eef4ee;
    }

    &:nth-child(20) {
      background-color: #aaa;
      cursor: pointer;
      transition: all 0.1s ease-out;
      border: 1px solid $deep-grid-color;

      &:hover {
        transform: scale(1.1);
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    &:nth-child(22) {
      background-image: url("/images/about/steria_room-export.gif");
      cursor: pointer;
      transition: all 0.1s ease-out;
      border: 1px solid $deep-grid-color;

      &:hover {
        transform: scale(1.1);
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    &:nth-child(24) {
      background-image: url("/images/about/forest_org-export.gif");
      cursor: pointer;
      transition: all 0.1s ease-out;
      border: 1px solid $deep-grid-color;

      &:hover {
        transform: scale(1.1);
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    &:nth-child(26) {
      background-image: url("/images/about/steria_town-export.gif");
      cursor: pointer;
      transition: all 0.1s ease-out;
      border: 1px solid $deep-grid-color;

      &:hover {
        transform: scale(1.1);
      }
    }

    p {
      position: relative;
      text-align: center;
      top: 3px;
      font-size: 1.1vw;
    }

    .button {
      width: 100%;
      height: 100%;
    }
  }
}

.about-property {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72vw;
  height: 40vw;
  margin-top: 1.7vw;
}

.revbutton {
  position: absolute;
  width: 2vw;
  height: 2vw;
  font-size: 30px;
  top: 0;
  right: 0;
  cursor: pointer;
  border: 1px solid #333;
  text-align: center;
  background-image: url("/x.png");
  background-size: cover;
  z-index: 1000;
}

.property {
  transition: all 0.2s;
  z-index: 3;
}

.square1 {
  position: absolute;
  left: 0%;
  top: 7dvh;
  width: 26vw;
  height: calc(16vw + 1px);
  background-color: $bg-color;
  z-index: 0;
}

.square2 {
  position: absolute;
  right: 0%;
  bottom: 0%;
  width: calc(26vw - 1px);
  height: 16vw;
  background-color: $bg-color;
  z-index: 0;
}

@include smartphone {
  .about-container {
    overflow: scroll;
  }

  .pixel-container {
    display: none;
  }

  .revbutton {
    display: none;
  }

  .property {
    position: absolute;
  }

  .about-property {
    position: relative;
    height: 80dvh;
    margin-top: 3dvh;
    margin-bottom: 6dvh;
    transform: translate(0, 0);
    top: auto;
    left: auto;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  30% {
    transform: translateY(50px);
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>

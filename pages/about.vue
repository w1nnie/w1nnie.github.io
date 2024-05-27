<template lang="pug">
.about-container
  CustomTransition
  .pixel-container
    .pixel(v-for="index in pixelNumbers" :style="{opacity: pixelOpacity,display: pixelDisplay}")
      p(v-if="index == 29") 世界観
      p(v-if="index == 31") アニメーション
      p(v-if="index == 33") 演出
      p(v-if="index == 35") プロフィール
      .button(v-if="index == 20" @click="descend(),atmosphere()")
      .button(v-if="index == 22" @click="descend(),animation()")
      .button(v-if="index == 24" @click="descend(),direction()")
      .button(v-if="index == 26" @click="descend(),technique()")
  .property(:style="{opacity: propertyOpacity}")
    .atmosphere-container.about-property(:style="{display: atmosDisplay}")
      Atmosphere
      .revbutton(@click="atmosphere(),ascend()")
    .animation-container.about-property(:style="{display: animationDisplay}")
      Animation
      .revbutton(@click="animation(),ascend()")
    .direction-container.about-property(:style="{display: directionDisplay}")
      Direction
      .revbutton(@click="direction(),ascend()")
    .technique-container.about-property(:style="{display: techniqueDisplay}")
      Technique
      .revbutton(@click="technique(),ascend()")

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
      techniqueDisplay: "none",
      propertyOpacity: 1
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
    technique() {
      if(this.techniqueDisplay == "none") {
        this.techniqueDisplay = "block";
      } else {
        setTimeout(() => {
          this.techniqueDisplay = "none";
        }, 500);
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import "~/assets/sass/app";

.about-container {
  overflow: hidden;
  width: 100vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  user-select: none;
}

.pixel-container {
  width: 72vw;
  height: 40vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 8vw;
  transition: all 0.3s ease-out;

  .pixel {
    overflow: hidden;
    transition: all 0.2s;
    user-select: none;
    background-size: cover;

    &:nth-child(even) {
      background-color: #eee;
    }

    &:nth-child(20) {
      background-image: url("/images/about/steria_room-export.gif");
      cursor: pointer;
      transition: all 0.1s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:nth-child(22) {
      background-image: url("/images/about/forest_org-export.gif");
      cursor: pointer;
      transition: all 0.1s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:nth-child(24) {
      background-image: url("/images/about/steria_town-export.gif");
      cursor: pointer;
      transition: all 0.1s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:nth-child(26) {
      background-color: #aaa;
      cursor: pointer;
      transition: all 0.1s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    p {
      position: relative;
      text-align: center;
      top: 0.4em;
      font-size: 1.3em;
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
}

.revbutton {
  position: absolute;
  width: 4vh;
  height: 4vh;
  font-size: 30px;
  top: 0;
  right: 0;
  cursor: pointer;
  border: 1px solid #333;
  text-align: center;
  background-image: url("/x.png");
  background-size: cover;
}

.property {
  transition: all 0.2s;
}

@include pc {
}

@include smartphone {
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

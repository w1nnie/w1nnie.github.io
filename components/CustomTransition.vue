<template lang="pug">
.transition
  .pixel(v-for="index in generatePixels")
</template>

<script>
export default {
  name: 'CustomTransition',
  data() {
    return {
      pixels: []
    }
  },
  computed: {
    generatePixels() {
      this.pixels = new Array(144);
      return this.pixels;
    }
  }
}
</script>

<style scoped lang="scss">
@import "/assets/sass/app";

.transition {
  position: fixed;
  width: 100%;
  display: grid;
  gap: 1px;
}

.pixel {
  background-color: rgb(100 200 255 / 100%);
}

@include smartphone {
  .transition {
    height: 94dvh;
    top: 0;
    grid-template-columns: repeat(9, 1fr);
  }

  .pixel {
    height: 6.25 vw;
  }
}

@include pc {
  .transition {
    height: 93dvh;
    top: 7dvh;
    grid-template-columns: repeat(16, 1fr);
  }

  .pixel {
    height: 11 vw;
  }
}
</style>

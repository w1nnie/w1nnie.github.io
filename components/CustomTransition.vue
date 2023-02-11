<template lang="pug">
.transition
  .pixel(v-for="(item, index) in generatePixels" :class="`pixel-${index}`")
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
@use "sass:math";
@import "/assets/sass/app";

$duration-division: 80;

.transition {
  position: fixed;
  width: 100%;
  display: grid;
  gap: 0;
}

.pixel {
  background-color: rgb(100 200 255 / 100%);
  opacity: 0;
  overflow: hidden;
  display: none;
}

@include smartphone {
  .transition {
    height: 94dvh;
    top: 0;
    grid-template-columns: repeat(9, 1fr);
  }

  .pixel {
    height: calc(100 / 16) vw;
  }

  @for $i from 0 through 143 {
    .pixel-#{$i} {
      transition-delay: #{math.div(math.floor(math.div($i, 9)) + $i % 9, $duration-division) + "s"};
    }
  }
}

@include pc {
  .transition {
    height: 93dvh;
    top: 7dvh;
    grid-template-columns: repeat(16, 1fr);
  }

  .pixel {
    height: calc(100 / 9) vw;
  }

  @for $i from 0 through 143 {
    .pixel-#{$i} {
      transition-delay: #{math.div(math.floor(math.div($i, 16)) + $i % 16, $duration-division) + "s"};
    }
  }
}

</style>

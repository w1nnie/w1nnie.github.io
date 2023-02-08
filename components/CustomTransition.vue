<template lang="pug">
.transition
</template>

<script>
export default {
  name: 'CustomTransition'
}
</script>

<style scoped lang="scss">
@import "/assets/sass/app";

.transition {
  background-color: magenta;
  position: fixed;
  width: 100%;
  opacity: 0.2;
}

@include smartphone {
  .transition {
    height: 100dvh;
    top: 0;
  }
}

@include pc {
  .transition {
    height: 98dvh;
    top: 70px;
  }
}
</style>

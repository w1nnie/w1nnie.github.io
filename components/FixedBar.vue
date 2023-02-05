<template lang="pug">
.content
  .header-pc
    .top top
    .about about
    .works works
    .contact contact
  .footer-sp
    .top top
    .about about
    .works works
    .contact contact
</template>

<script>
export default {
  name: 'FixedBar'
}
</script>

<style scoped lang="scss">
@import "/assets/sass/app";

.header-pc {
  position: fixed;
  width: 100vw;
  height: 70px;
  top: 0;
  background-color: rgb(226 25 21 / 100%);
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr;
  text-align: center;

  * {
    background-color: rgb(255 255 0 / 100%);
    margin: 5px;
  }

  .top {
    text-align: left;
  }
}

@include smartphone {
  .header-pc {
    display: none;
  }
}

.footer-sp {
  position: fixed;
  width: 100vw;
  height: 50px;
  bottom: 0;
  background-color: rgb(226 25 21 / 100%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;

  * {
    background-color: rgb(255 255 0 / 100%);
    margin: 5px;
  }
}

@include pc {
  .footer-sp {
    display: none;
  }
}
</style>

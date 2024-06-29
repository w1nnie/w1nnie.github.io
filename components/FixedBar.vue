<template lang="pug">
.fixedbar-container
  .header-pc
    NuxtLink.top(to="/") top
    .spacing
    NuxtLink.about(to="/about") about
    NuxtLink.works(to="/works") gallery
    NuxtLink.contact(to="/contact") contact
  .footer-sp
    NuxtLink.top(to="/") top
    NuxtLink.about(to="/about") about
    NuxtLink.works(to="/works") gallery
    NuxtLink.contact(to="/contact") contact
</template>

<script>
export default {
  name: 'FixedBar'
}
</script>

<style scoped lang="scss">
@import "/assets/sass/app";

a {
  text-decoration: none;
  color: $theme-color;
  font-size: 2.4vh;
}

.header-pc {
  position: sticky;
  z-index: 10000;
  width: 100%;
  height: 7dvh;
  top: 0;
  background-color: $bg-color;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr 1fr 1fr;
  text-align: center;
  line-height: 7dvh;
  text-decoration: none;

  *:hover {
    color: $sub-color;
    transition: 0.3s;
  }

  .top {
    text-align: left;
    padding-left: 2dvh;
  }
}

@include smartphone {
  .header-pc {
    display: none;
  }
}

.footer-sp {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 6dvh;
  bottom: 0;
  background-color: $bg-color;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  line-height: 6dvh;
  overflow: hidden;

  a {
    font-size: 2.5vh;
  }
}

@include pc {
  .footer-sp {
    display: none;
  }
}
</style>

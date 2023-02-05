<template lang="pug">
  .content
    .header-pc
    .footer-sp
</template>

<script>
export default {
  name: 'FixedBar'
}
</script>

<style scoped lang="sass">
@import "/assets/sass/app.scss"
@include smartphone
  .header-pc
    display: none

@include pc
  .footer-sp
    display: none


.header-pc
  position: fixed
  width: 100%
  height: 70px
  top: 0
  background-color: #f00

.footer-sp
  position: fixed
  width: 100%
  height: 50px
  bottom: 0
  background-color: #00f
</style>

<template lang="pug">
    .content
      fixedBar
      .img-grid

</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      width: 0
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
    }
  }
}
</script>

<style scoped lang="sass">
  .img-grid
    background-color: #000
</style>

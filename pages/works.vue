<template lang="pug">
.works-container
  h1 this is works page.
  .img-grid(:style="responsiveColumns")
    .item(v-for="(item, index) in data"
      :style="itemHeight")
</template>

<script>
export default {
  name: 'WorksPage',
  data() {
    return {
      width: 0,
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
    },
  },
  computed: {
    responsiveColumns: function() {
      if (this.width > 1000) {
        // this.columns = 5;
        return {
          "grid-template-columns": "repeat(5, 1fr)"
        }
      } else if (this.width > 768) {
        return {
          "grid-template-columns": "repeat(3, 1fr)"
        }
      } else {
        return {
          "grid-template-columns": "repeat(2, 1fr)"
        }
      }
    },
    itemHeight: function() {
      if (this.width > 1000) {
        // this.columns = 5;
        return {
          "height": "19.8vw"
        }
      } else if (this.width > 768) {
        return {
          "height": "33vw"
        }
      } else {
        return {
          "height": "49.5vw"
        }
      }
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  }
}
</script>

<style scoped lang="scss">
.img-grid {
  background-color: rgb(128 128 128 / 100%);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1px;
  row-gap: 1px;

  div {
    background-color: lightcyan;
  }
}
</style>

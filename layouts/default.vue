<template>
  <div>
    <FixedBar />
    <Nuxt />
    <FontGlyphPreload />
  </div>
</template>

<script>
import FontGlyphPreload from '~/components/FontGlyphPreload.vue'

export default {
  components: { FontGlyphPreload },
  mounted() {
    this.$adobeFonts(document)
  },
}
</script>

<template>
  <span class="font-glyph-preload" aria-hidden="true">{{ chars }}</span>
</template>

<script>
import data from '~/assets/generated/font-chars.json'

export default {
  computed: {
    chars() {
      return data.chars
    },
  },
}
</script>

<style scoped>
.font-glyph-preload {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  pointer-events: none;
}
</style>

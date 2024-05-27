<template lang="pug">
  .container
    .item
    .text-container
      .head 技術で創作に彩りを
      .main 新しくて面白そうな技術に常に関心を持っています。ドット絵に限らず創作に絡めて斬新な作品を作りたいと考えています。
    .item
    .item
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Technique',
    data() {
      return {

      }
    },
    methods: {}
  })
</script>

<style scoped lang="scss">
@import "~/assets/sass/app";

.container {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5%;
}

.item {
  background-color: navy;
  animation: inset 0.4s cubic-bezier(0, 0.78, 0.46, 0.99);
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 10%;
  text-align: center;
  border: 1px solid #333;

  .head {
    font-size: 2em;
    width: 100%;
  }

  .main {
    font-size: 1.35em;
    width: 100%;
    margin-top: 5%;
  }
}

@keyframes inset {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  100% {
    clip-path: inset(0);
  }
}

</style>

<template lang="pug">
.about-container
  CustomTransition
  .profile profile
    .icon
    .bio
      .name しろねぎ
      .skills
        .do Do Pixelart 動画編集
        .like Like Webdesign illustration
        .interest Live2D AR ゲーム制作 3DCG
  .achievement achievement
  .links 各種リンク

</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage'
})

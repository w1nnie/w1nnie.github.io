<template lang="pug">
.about-container
  CustomTransition
  .profile
    .title Profile
    .profile-container
      .icon
      .bio
        .name しろねぎ
        .skills
          .do Do Pixelart 動画編集
          .like Like Webdesign Illustration
          .interest Live2D AR ゲーム制作 3DCG
  .achievement Achievement
  .links Links

</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage'
})
</script>

<style scoped lang="scss">
@import "~/assets/sass/app";

.about-container {
  font-size: 4vw;
}

.profile {
  padding: 2vw;

  .title {
    width: 100%;
  }

  .profile-container {
    display: flex;
    justify-content: space-around;

    .icon {
      background-color: $theme-color;
    }

    .bio {
      display: grid;

      .name {
        font-size: 8vw;
      }

      .skills {
        font-size: 2vw;
      }
    }
  }
}

@include pc {
  .profile-container {
    flex-direction: row;

    .icon {
      width: 40vw;
      height: 40vw;
    }

    .bio {
      width: 50vw;
    }
  }
}

@include smartphone {
  .profile-container {
    flex-direction: column;

    .icon {
      width: 80vw;
      height: 80vw;
    }

    .bio {
      width: 80vw;
    }
  }
}

</style>

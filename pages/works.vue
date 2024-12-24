<template lang="pug">
.works-container
  CustomTransition
  .works-tags
    .tag(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : inactiveClass]") {{displayTagList[index]}}
  .img-grid-wrapper
    transition-group.graphics-item-container(name="filter")
    .img-grid(:style="responsiveColumns")
      .item(v-for="(item, index) in sortedData"
      :style="{height: itemHeight}"
      :key="item.date"
      @click="openModal(item)")
        img.item-img(tabindex=-1 :style="{objectPosition: item.position}" :src="require(`/static/images/gallery/${item.filename}${item.raw_ext}`)")
  .modal-wrapper(:style="{display: isModalVisible}")
    .modal-bg(@click="closeModal()")
    .modal-content(:class="activeModal" :style="{width: modalWidth}")
      .yt-container(v-if="selectedImageLinks != ''")
        youtube(class="iframe" ref="youtube" :width="iframeWidth" :height="iframeHeight" :video-id="selectedImageLinks")
      img(v-else :src="require(`/static/images/gallery/${selectedImageUrl}${selectedImageExt}`)")
      .text-box(:style="{display: textDisplay}")
        .title-container
          .title {{ selectedTitle }}
          a.link-button(:style="{display: linkDisplay}" :href="linkText" target="_blank")
            img(:src="require(`/static/link.png`)")
        .description {{ selectedDescription }}

</template>

<script>
import worksData from "@/assets/works.json";

export default {
  name: 'WorksPage',
  data() {
    return {
      width: 0,
      worksData,
      tagList: ["ドット絵", "依頼制作", "MV", "プログラミング"],
      displayTagList: ["ドット絵", "依頼制作", "MV", "プログラミング"],
      activeTagFlags: [false, false, false],
      activeTagIndex: -1,
      oldActiveTagIndex: 0,
      activeClass: "works-tags-item-active",
      inactiveClass: "works-tags-item",
      isShow: false,
      showIndex: 0,
      show: true,
      selectedImageLinks: "",
      selectedImageUrl: "steria_town",
      selectedImageExt: ".gif",
      selectedDescription: "",
      selectedTitle: "",
      isModalVisible: "none",
      activeModal: "",
      modalWidth: "50vw",
      iframeWidth: 640,
      iframeHeight: 360,
      textDisplay: "block",
      linkDisplay: "block",
      linkText: ""
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
      if(this.width > 767){
        this.iframeWidth = this.width / 2;
      } else {
        this.iframeWidth = this.width;
      }
      this.iframeHeight = this.iframeWidth * 9 / 16;

    },
    enableTag(index) {
      this.oldActiveTagIndex = this.activeTagIndex;
      if (this.activeTagIndex == index) {
        this.activeTagIndex = -1;
        this.activeTagFlags.fill(false);
      } else {
        this.activeTagIndex = index;
        this.activeTagFlags.fill(false);
        this.activeTagFlags[index] = true;
      }
    },
    openModal(item) {
      this.selectedImageLinks = item.links;
      this.selectedImageUrl = item.filename;
      this.selectedImageExt = item.raw_ext;
      this.selectedTitle = item.title;
      this.selectedDescription = item.desc != "" ? "▶" + item.desc : "";
      this.isModalVisible = "block";
      this.activeModal = "modal-active";
      this.linkText = item.linkText;
      if(item.linkText != "") {
        this.linkDisplay = "block";
      } else {
        this.linkDisplay = "none";
      }
      if(item.title == "") {
        this.textDisplay = "none";
      } else {
        this.textDisplay = "block";
      }
      if(this.width > 767){
        if(item.rawWidth != 0) {
          let w = item.rawWidth * Math.floor(this.width * 0.5 / item.rawWidth);
          this.modalWidth = w + "px";
        } else {
          this.modalWidth = "50vw"
        }
      } else {
        if(item.rawWidth != 0) {
          let w = item.rawWidth * Math.floor(this.width / item.rawWidth);
          if (w == 0) {
            w = this.width;
          }
          this.modalWidth = w + "px";
        } else {
          this.modalWidth = "100vw"
        }
      }
    },
    closeModal() {
      this.isModalVisible = "none";
      this.activeModal = "";
      if(this.selectedImageLinks != ""){
        console.log(this.player);
        this.player.pauseVideo();
        this.selectedImageLinks = "";
      }
    },

  },
  computed: {
    filteredData() {
      let data = this.worksData.slice();
      let t = this.tagList;
      let ati = this.activeTagIndex;
      if (this.activeTagIndex == -1) {
      } else {
        data = data.filter(function(item, index) {
          let isIncludeTag = item.tags.some(a => a == t[ati]);
          return isIncludeTag;
        });
      }
      return data;
    },
    sortedData() {
      let data = this.filteredData.slice();
      data = data.sort(function(a, b) {
        return b.date - a.date;
      });
      return data;
    },
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
          "height": "8.8vw"
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
    },
    player() {
      return this.$refs.youtube.player
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
@import "/assets/sass/app";

.works-container {
  @extend %grid;

  overflow: hidden;
  width: 100vw;
  height: 93vh;

  // image-rendering: pixelated;
  position: relative;
}

.works-tags {
  position: absolute;
  top: 10vh;
  right: 5vw;
  width: 10vw;
  height: 30vh;
  display: grid;
  user-select: none;
  font-size: 1vw;
  text-align: right;
  line-height: 1vw;
  filter: drop-shadow(2px 2px 0 $deep-grid-color) drop-shadow(-0.1px -0.1px 0 $deep-grid-color);

  .works-tags-item {
    position: relative;
    cursor: pointer;
    background-color: $bg-color;
    line-height: 5vh;
    height: 5vh;
    padding-right: 0.6vw;
    clip-path: polygon(0 20%, 10% 0, 100% 0, 100% 100%, 10% 100%, 0 80%);

    &::before {
      content: "";
      position: absolute;
      border: 1px solid $deep-grid-color;
      border-radius: 100%;
      width: 1vh;
      height: 1vh;
      background-color: #fff;
      top: 2vh;
      left: 10%;
    }

    &:hover {
      animation: fadeIn 0.3s ease;
      background-color: $sub-color;
      color: #fff;
    }
  }

  .works-tags-item-active {
    cursor: pointer;
    position: relative;
    background-color: $theme-color;
    color: #fff;
    line-height: 5vh;
    height: 5vh;
    padding-right: 0.6vw;
    clip-path: polygon(0 20%, 10% 0, 100% 0, 100% 100%, 10% 100%, 0 80%);

    &::before {
      content: "";
      position: absolute;
      border: 1px solid $deep-grid-color;
      border-radius: 100%;
      width: 1vh;
      height: 1vh;
      background-color: #fff;
      top: 2vh;
      left: 10%;
    }

    &:hover {
      background-color: $theme-color;
    }
  }
}

.img-grid-wrapper {
  position: absolute;
  top: 0;
  left: 4vw;
  display: inline-block;
  vertical-align: top;
  width: 80vw;
  height: 93vh;
  overflow-x: visible;
  overflow-y: scroll;
  transform: rotate3d(0, 1, 0, 0deg);
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

::-webkit-scrollbar {
  display: none;
}

.img-grid {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1vw;
  row-gap: 2vw;
  padding: 2vw;
}

.item-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid $deep-grid-color;
  box-shadow: 2px 2px $deep-grid-color;
  -webkit-user-drag: none;
  -khtml-user-drag: none;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-out;
  }
}

.modal-active {
  animation: modal 0.2s ease;
}

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  user-select: none;
  z-index: 5;

  .modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #777;
    opacity: 0.7;
  }

  .modal-content {
    position: absolute;
    left: 0;
    right: 0;
    top: -10vh;
    bottom: 0;
    margin: auto;
    width: 50vw;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    .yt-container {
      position: relative;
      width: 100%;
      height: calc(50vw / 16 * 9);

      .iframe {
        position: absolute;
        top: 40%;
        width: 100%;
        height: 100%;
      }
    }

    img {
      width: 100%;
      height: auto;
    }

    .text-box {
      width: 100%;
      color: #111;
      height: 5vw;
      display: flex;
      flex-flow: column;
      align-items: left;
    }

    .title-container {
      width: 60%;
      display: flex;
      flex-flow: row;

      .title {
        width: 80%;
        height: 2.3vw;
        font-size: 1.2vw;
        line-height: calc(2.3vw - 5px);
        margin: 5px;
        padding-left: 5px;
        background-color: $grid-color;
        border: 1px solid $deep-grid-color;
        box-shadow: 2px 2px $deep-grid-color;
      }

      .link-button {
        height: 2.3vw;
        width: 2.3vw;
        margin: 5px;
        padding: 2px;
        background-color: $grid-color;
        border: 1px solid $deep-grid-color;
        box-shadow: 2px 2px $deep-grid-color;

        &:hover {
          background-color: rgb(170 230 160 / 100%);
        }
      }
    }

    .description {
      font-size: 1vw;
      margin: 5px;
      padding: 2px;
      padding-left: 5px;
      background-color: $accent-color;
      border: 1px solid $deep-grid-color;
      box-shadow: 2px 2px $deep-grid-color;
    }
  }
}

@include smartphone {
  .works-container {
    background-image:
      repeating-linear-gradient(
        90deg,
        $grid-color,
        $grid-color 1px,
        transparent 1px,
        transparent 8vw
      ),
      repeating-linear-gradient(
        0deg,
        $grid-color,
        $grid-color 1px,
        $bg-color 1px,
        $bg-color 8vw
      );
    background-size: 8vw;
  }

  .works-tags {
    bottom: 7vh;
    left: 0;
    width: 100vw;
    height: 5vh;
    grid-template-columns: repeat(5, 1fr);
    display: none;
  }

  .img-grid-wrapper {
    width: 100vw;
    left: 0;
    top: 0;

    .img-grid {
      column-gap: 3vw;
    }
  }

  .modal-wrapper {
    .modal-content {
      width: 100vw;
      left: 0;

      .yt-container {
        height: calc(100vw / 16 * 9);
      }

      .title-container {
        width: 90%;

        .title {
          width: 80%;
          height: 8vw;
          line-height: calc(8vw - 5px);
          font-size: 4vw;
        }

        .link-button {
          height: 8vw;
          width: 8vw;
        }
      }

      .description {
        height: 12vw;
        font-size: 3vw;
      }
    }
  }
}

@keyframes modal {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

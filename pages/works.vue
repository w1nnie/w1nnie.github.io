<template lang="pug">
.works-container
  CustomTransition
  .works-tags
    .tag(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : inactiveClass]") {{displayTagList[index]}}
  .perspective-set
    .img-grid-wrapper
      transition-group.graphics-item-container(name="filter")
      .img-grid(:style="responsiveColumns")
        .item(v-for="(item, index) in sortedData"
        :style="{height: itemHeight}"
        :key="item.date"
        @click="openModal(item)")
          img.item-img(tabindex=-1 :style="{objectPosition: item.position}" :src="require(`/static/images/${item.filename}${item.raw_ext}`)")
  .modal-wrapper(:style="{display: isModalVisible}")
    .modal-bg(@click="closeModal()")
    .modal-content(:class="activeModal")
      .yt-container(v-if="selectedImageLinks != ''")
        youtube(class="iframe" ref="youtube" :width="iframeWidth" :height="iframeHeight" :video-id="selectedImageLinks")
      img(v-else :src="require(`/static/images/${selectedImageUrl}${selectedImageExt}`)")
      .text-box {{ selectedDescription }}
</template>

<script>
import worksData from "@/assets/works.json";

export default {
  name: 'WorksPage',
  data() {
    return {
      width: 0,
      worksData,
      tagList: ["ドット絵", "プログラミング", "MV", "依頼制作"],
      displayTagList: ["ドット絵", "プログラミング", "MV", "依頼制作"],
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
      isModalVisible: "none",
      activeModal: "",
      iframeWidth: 640,
      iframeHeight: 260
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
      this.iframeWidth = this.width / 2;
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
      this.selectedDescription = item.desc;
      this.isModalVisible = "block";
      this.activeModal = "modal-active"
    },
    closeModal() {
      this.isModalVisible = "none";
      this.activeModal = "";
      if(this.selectedImageLinks != ""){
        this.player.stopVideo();
        this.selectedImageLinks != ""
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
  image-rendering: pixelated;
}

.works-tags {
  position: absolute;
  top: 10vh;
  right: 2vw;
  width: 10vw;
  height: 20vh;
  display: grid;
  user-select: none;

  .works-tags-item {
    cursor: pointer;

    &:hover {
      animation: fadeIn 0.3s ease;
      background-color: $sub-color;
    }
  }
}

.works-tags-item-active {
  cursor: pointer;
  background-color: $theme-color;
  color: #fff;

  &:hover {
    background-color: $theme-color;
  }
}

@include smartphone {
  .works-tags {
    bottom: 7vh;
    left: 0;
    width: 100vw;
    height: 5vh;
    grid-template-columns: repeat(5, 1fr);
  }
}

.perspective-set {
  perspective: 1000px;
}

.img-grid-wrapper {
  position: absolute;
  top: 5vh;
  left: 5vw;
  display: inline-block;
  vertical-align: top;
  width: 80vw;
  height: 80vh;
  overflow-x: visible;
  overflow-y: scroll;
  transform: rotate3d(0, 1, 0, 0deg);

  // background-color: blue;
  transition: transform 0.3s ease-in-out;
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

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-out;
  }
}

.po {
  width: 30px;
  height: 30px;
  background-color: green;
  position: fixed;
  top: calc(80vh - 30px);
  right: 0;
}

.poyo {
  width: 20vw;
  height: 20vw;
  position: fixed;
  right: 10%;
  bottom: 10%;
  background-image: url("/works_1.png");
  background-size: cover;
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
    left: 25vw;
    width: 50vw;
    height: 100vh;
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
      color: #eee;
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    background-color: $sub-color;
  }
}
</style>

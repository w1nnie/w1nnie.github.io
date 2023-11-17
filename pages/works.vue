<template lang="pug">
.works-container
  CustomTransition
  .works-tags
    .works-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{displayTagList[index]}}
  .img-grid-wrapper(:style="{transform: deg}")
    transition-group.graphics-item-container(name="filter")
    .img-grid(:style="responsiveColumns")
      .item(v-for="(item, index) in sortedData"
      :style="{height: itemHeight}"
      :key="item.date"
      @click="openModal(item)")
        img.item-img(tabindex=-1 :style="{objectPosition: item.position}" :src="require(`/static/images/${item.filename}${item.raw_ext}`)")
  .po(@click="changeDeg()")
  .modal-wrapper(:style="{display: isModalVisible}")
    .modal-bg(@click="closeModal()")
    .modal-content
      img(:src="require(`/static/images/${selectedImageUrl}${selectedImageExt}`)")
</template>

<script>
import worksData from "@/assets/works.json";

export default {
  name: 'WorksPage',
  data() {
    return {
      width: 0,
      worksData,
      tagList: ["ドット絵", "動画編集", "webアプリ"],
      displayTagList: ["ドット絵", "動画編集", "webアプリ"],
      activeTagFlags: [false, false, false],
      activeTagIndex: -1,
      oldActiveTagIndex: 0,
      activeClass: "graphics-tags-item-active",
      inactiveClass: "graphics-tags-item",
      isShow: false,
      showIndex: 0,
      show: true,
      deg: "rotate3d(0, 1, 0, 0deg)",
      isChangedDeg: "none",
      selectedImageUrl: "steria_town",
      selectedImageExt: ".gif",
      isModalVisible: false
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
    changeDeg() {
      if(!this.isChangedDeg) {
        this.deg = "rotate3d(0, 1, 0, 10deg)";
        this.isChangedDeg = true;
      } else {
        this.deg = "rotate3d(0, 1, 0, 0deg)";
        this.isChangedDeg = false;
      }
    },
    openModal(item) {
      this.isModalVisible = "block";
      this.selectedImageUrl = item.filename;
      this.selectedImageExt = item.raw_ext;
    },
    closeModal() {
      this.isModalVisible = "none";
    }
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
.works-container {
  perspective: 1000px;
  overflow: hidden;
  width: 100vw;
  height: 90vh;
  image-rendering: pixelated;
}

.img-grid-wrapper {
  position: absolute;
  left: 10vw;
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

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;

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
    left: 15vw;
    width: 70vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>

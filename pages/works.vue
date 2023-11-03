<template lang="pug">
.works-container
  CustomTransition
  .works-tags
    .works-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{displayTagList[index]}}
  .img-grid-wrapper
    transition-group.graphics-item-container(name="filter")
    .img-grid(:style="responsiveColumns")
      .item(v-for="(item, index) in sortedData"
      :style="itemHeight"
      :key="item.date"
      @click="displayItem(item, index)")
        img.item-img(:style="{objectPosition: item.position}" :src="require(`/static/images/${item.filename}${item.thm_ext}`)")
  .display
    img(:src="require(`/static/images/${displayUrl}`)")
</template>

<script>
import worksData from "@/assets/works.json";

export default {
  name: 'WorksPage',
  data() {
    return {
      width: 0,
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      worksData,
      tagList: ["ドット絵", "動画編集"],
      displayTagList: ["ドット絵", "動画編集"],
      activeTagFlags: [false, false],
      activeTagIndex: -1,
      oldActiveTagIndex: 0,
      activeClass: "graphics-tags-item-active",
      inactiveClass: "graphics-tags-item",
      isShow: false,
      showIndex: 0,
      show: true,
      displayUrl: "steria_room.gif"
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
    displayItem(item) {
      this.displayUrl = item.filename + item.raw_ext;
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
.img-grid-wrapper {
  display: inline-block;
  vertical-align: top;
  width: 50vw;
  height: 80vh;
  overflow-y: auto;
}

.img-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1vw;
  row-gap: 2vw;
  padding: 2vw;

  div {
    // background-color: cyan;
  }
}

img.item-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.display {
  width: 48vw;
  height: 80vh;
  background-color: gray;
  display: inline-block;
}

</style>

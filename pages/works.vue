<template lang="pug">
.works-container
  CustomTransition
  h1 this is works page.
  .works-tags
    .works-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{displayTagList[index]}}
  transition-group.graphics-item-container(name="filter")
  .img-grid(:style="responsiveColumns")
    .item(v-for="(item, index) in sortedData"
     :style="itemHeight"
     :key="item.date")
      img.item-img(:style="{objectPosition: item.position}" :src="require(`/static/images/${item.filename}${item.thm_ext}`)")
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
      show: true
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1px;
  row-gap: 1px;

  div {
    background-color: cyan;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

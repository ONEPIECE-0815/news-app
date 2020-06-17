<template>
  <section
    class="banner-container"
    @mouseenter="autoPlayStop"
    @mouseleave="autoPlayStart"
  >
    <ul
      :style="{
        width: banners.length * 100 + '%',
        transform: 'translateX(-' + (index - 1) * 100 + 'vw)',
      }"
    >
      <li v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.url" alt="" />
        </a>
      </li>
      <!-- <template v-if="navigation">
        <li class="swiper-button-prev" slot="button-prev"></li>
        <li class="swiper-button-next" slot="button-next"></li>
      </template> -->
    </ul>
    <div class="dots">
      <span
        v-for="(item, i) in banners"
        :key="i"
        :class="{ active: i === index - 1 }"
        @click="index = i + 1"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "banner",
  props: {
    banners: {
      type: Array,
      required: true,
    },
    swiperName: {
      type: String,
      required: false,
    },
    navigation: {
      type: Object,
      required: false,

    },
    delay:{
      type:Number,
      default:3000,
    }
  },
  data() {
    return {
      index: 1,
      timer: null,
    };
  },
  created() {
    // console.log("创建了");
    this.autoPlayStart();
  },
  destroyed() {
    this.autoPlayStop();
  },
  methods: {
    autoPlayStart() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        // console.log(this.banners.length);
        // this.index = (this.index+1) % this.banners.length;
        if (this.index < this.banners.length) {
          this.index++;
        } else {
          this.index = 1;
        }
      }, this.delay);
    },
    autoPlayStop() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../style/variable";
.banner-container {
  position: relative;
  .wh(100vw, 25vh);
  .overf;
  ul {
    .flex-wrap;
    position: relative;
    transition: all 0.5s ease-in-out;
    height: 100%;
  }
  a {
    display: block;
  }
  li,
  img,
  a {
    .wh(100vw);
  }
  .dots {
    position: absolute;
    .flex-wrap(center);
    height: 8vw;
    width: 100%;
    bottom: 10%;
    span {
      .wh(10px, 10px);
      .radius(50%);
      .cur;
      margin: 0 5px;
      background-color: rgba(0, 0, 0, 0.5);
      &.active {
        background-color: @primaryColor;
      }
    }
  }
}
</style>

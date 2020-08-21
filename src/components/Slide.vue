<template>
  <section 
  v-swiper:mainBanner="swiperOption" 
  :class="swiperName"
  >
    <ul class="swiper-wrapper">
      <li class="swiper-slide" :key="item.id" v-for="item in banners">
        <a :href="item.link" target="_blank">
          <img :src="item.url" :alt="item.alt"
        /></a>
      </li>
    </ul>
    <div class="swiper-pagination"></div>
    <template v-if="navigation">
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </template>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Slide",
  props: {
    banners: {
      type: Array,
      required: true,
    },
    swiperOption: {
      type: Object,
      required: true,
    },
    swiperName: {
      type: String,
      required:true
    },
    navigation: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
    // console.log("Current Swiper instance object", this.mySwiper);
    this.mainBanner.slideTo(2, 0, false);

    // this.mainBanner.slideTo(1, 0, false);
    // this.secondBanner.slideTo(1, 0, false);
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="less" scoped>
.mainBanner {
  .wh(100%, 25vh);
  .mb;
  a,
  img {
    .wh;
  }
  a {
    display: block;
  }
  /deep/.swiper-pagination-bullet-active {
    background-color: @primaryColor;
  }
  /deep/.swiper-button-prev,
  .swiper-button-next {
    color: #8e8e8e;
    &::after {
      .fz(5em);
      text-shadow: 0 0 3px #333;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>

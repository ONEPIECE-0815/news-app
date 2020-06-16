<template>
  <section 
  v-swiper="swiperOption" 
  :class="swiperName"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item.id" v-for="item in banners">
        <a href="" target="_blank"><img :src="item.url" :alt="item.alt" /></a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Awesome",
  props: {
    banners: {
      type: Array,
      required: true,
    },
    swiperOption:{
      type: Object,
      required: true,
    },
    swiperName:{
      type:String,
      required:false
    }
  },
  data() {
    return {
      
    };
  },
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
    // this.mySwiper.slideTo(1, 2000, false);
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
@import "../style/variable";

.mainBanner{
  .wh(100%,25vh);
  a,img{.wh}
  a{display: block;}
  .swiper-pagination-bullet-active{
    background-color: @primaryColor;
  }
}
</style>

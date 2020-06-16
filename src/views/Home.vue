<template>
  <article class="home">
    <Awesome 
      v-if="swiperMain.isShow" 
      :banners="swiperMain.banners" 
      :swiperOption="swiperMain.swiperOption"
      :swiperName="swiperMain.name" 
    />
    <!-- :swiperOption="swiperOption" -->
  </article>
</template>

<script>
  // @ is an alias to /src

  // import Banner from "@/components/Banner";
  import Awesome from "@/components/Awesome";
import img from "@/assets/logo.png";
  export default {
    name: "Home",
    data() {
      return {
        swiperMain: {
          name: "mainBanner",
          isShow: true,
          banners: [
            { id: 1, url: img, link: "https://www.baidu.com/" },
            { id: 2, url: img, link: "https://www.baidu.com/" },
            { id: 3, url: img, link: "https://www.baidu.com/" },
          ],
          swiperOption: {
            loop: false,
            autoplay: false,
            pagination: {
              el: ".swiper-pagination",
              // clickable: true,
            },
          },
        },
      };
    },
    components: {
      Awesome,
    },
  };
</script>

<style lang="less" scoped>
  @import "../style/variable";

  .home {
    .wh(100%, auto);
    flex: 1;
  }
  .swiper-pagination-bullet-active{
    background-color: @primaryColor;
  }
</style>
<template>
  <article class="home">
    <Slide
      v-if="swiperMain.isShow"
      :banners="swiperMain.banners"
      :swiperOption="swiperMain.swiperOption"
      :swiperName="swiperMain.name"
      :navigation="swiperMain.swiperOption.navigation"
    />
  </article>
</template>

<script>
// @ is an alias to /src

import Slide from "@/components/Slide";
// import Banner from "@/components/Banner";
// import Banner from "@/components/Banner";

export default {
  name: "Home",
  data() {
    return {
      swiperMain: {
        name: "mainBanner",
        isShow: true,
        banners: [
          {
            id: 1,
            url: require("@/assets/News.jpg"),
            link: "https://www.baidu.com/",
          },
          {
            id: 2,
            url: require("@/assets/News.jpg"),
            link: "https://www.baidu.com/",
          },
          {
            id: 3,
            url: require("@/assets/News.jpg"),
            link: "https://www.baidu.com/",
          },
        ],
        swiperOption: {
          speed: 500,
          loop: true,
          autoplay: false,
          pagination: {
            el: ".swiper-pagination",
            // clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      },
    };
  },
  components: {
    Slide,
    // Banner,
  },
};
</script>

<style lang="less" scoped>
@import "../style/variable";

.home {
  .wh(100%, auto);
  flex: 1;
}
</style>

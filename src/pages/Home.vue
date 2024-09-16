<template>
  <div class="home-desktop">
    <HomeCarousel />
    <div>
      <FlashSales />
    </div>
    <div>
      <TrendingSales />
    </div>
    <div>
      <TopHundred />
    </div>
    <div>
      <Summer />
    </div>
    <div>
      <carousel />
    </div>
    <div>
      <SummerThree />
    </div>
   
  </div>
  <!-- ===========================mobile -->
  <div class="home-mobile">
    <div>
      <SummerTwo />
    </div>
    <div>
      <FlashSales />
    </div>
  </div>
</template>

<script>
import FlashSales from "@/components/FlashSales.vue";
import TrendingSales from "@/components/TrendingSales.vue";
import TopHundred from "@/components/TopHundred.vue";
import Summer from "@/components/Summer.vue";
import SummerTwo from "@/Cards/SummerTwo.vue";
import Carousel from "@/Cards/carousel.vue";
import SummerThree from "@/Cards/SummerThree.vue";
import HomeCarousel from "@/Cards/HomeCarousel.vue";

export default {
  components: {
  HomeCarousel,
    FlashSales,
    TrendingSales,
    TopHundred,
    Summer,
    SummerTwo,
    Carousel,
    SummerThree,
  },
};
</script>

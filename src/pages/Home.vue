<template>
  <v-app-bar flat class="third-main">
    <section class="px-4 mx-4 third">
      <v-list
        nav
        class="d-flex align-center bg-white mt-3 justify-space-evenly"
      >
        <v-list-item
          v-for="thirdlink in thirdlinks"
          :key="thirdlink"
          :to="thirdlink.route"
          router
        >
          <div class="d-flex align-center ga-1">
            <v-list-item-title class="text-grey">{{
              thirdlink.text
            }}</v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </section>
  </v-app-bar>
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
import data from "@/data.json";
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
  data() {
    return {
      thirdlinks: data.thirdlinks,
    };
  },
};
</script>

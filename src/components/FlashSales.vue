<template>
  <div class="tophundred">
    <div class="px-16 pt-16 bg-white">
      <div
        class="view d-flex align-center justify-space-between text-grey-darken-4"
      >
        <h4 class="ml-3">Flash Sales</h4>
        <span
          class="font-weight-bold cursor-pointer text-subtitle-2"
          style="font-size: 13px !important"
          >View All</span
        >
      </div>
      <v-row class="mt-8 px-3 flashsales-row">
        <v-col md="3" v-for="flashSale in flashSales" :key="flashSale.id">
          <v-card class="bg-white px-8 py-4 d-flex justify-center">
            <div>
              <span
                class="text-grey text-center ml-8"
                style="font-size: 18px"
                >{{ flashSale.deal }}</span
              >
              <div class="d-flex mt-1 justify-space-evenly">
                <div class="b-block text-center">
                  <p class="text-black text-subtitle-1 font-weight-bold">
                    {{ flashSale.hour }}
                  </p>
                  <span class="text-grey">hour</span>
                </div>
                <div class="text-grey text-h5 mt-n1">:</div>
                <div class="b-block">
                  <p class="text-black text-subtitle-1 font-weight-bold">
                    {{ flashSale.min }}
                  </p>
                  <span class="text-grey">min</span>
                </div>
                <div class="text-grey text-h5 mt-n1">:</div>
                <div class="b-block">
                  <p class="text-black text-subtitle-1 font-weight-bold">
                    {{ flashSale.sec }}
                  </p>
                  <span class="text-grey">sec</span>
                </div>
              </div>
              <div class="text-center">
                <img :width="170" :src="flashSale.img" alt="" class="my-5" />
              </div>
              <p class="text-black font-weight-bold text-center">
                {{ flashSale.name }}
              </p>
              <p
                class="text-grey text-center"
                style="font-size: 15px; font-weight: 500"
              >
                {{ flashSale.description }}
              </p>
              <div class="d-flex align-center ga-2 mt-2 justify-center py-2">
                <img :width="80" src="/public/assets/ratings.png" alt="" />
                <span class="text-grey" style="font-size: 12px">(54)</span>
              </div>
              <div class="d-flex align-center ga-2 mt-2">
                <span class="text-red font-weight-bold">{{
                  flashSale.price
                }}</span>
                <span class="text-grey">{{ flashSale.oldPrice }}</span>
                <v-btn class="bg-red small" flat>{{
                  flashSale.discount
                }}</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";
export default {
  name: "FlashSales",
  data() {
    return {
      flashSales: data.flashSales,
    };
  },
};
</script>

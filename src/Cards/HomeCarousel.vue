<template>
  <v-carousel cycle interval="3000" show-arrows="hover" hide-delimiters>
    <v-carousel-item
      v-for="homecarousel in homecarousels"
      :key="homecarousel"
      :style="{ backgroundImage: `url(${homecarousel.image})` }"
    >
      <div
        class="position-relative h-100 d-flex top-girls-main"
        style="width: 100%"
      >
        <div class="top-girls">
          <img :src="homecarousel.image" alt="carousel" style="height: 100%" />
        </div>

        <div
          class="top-side position-relative w-100"
          :style="{ backgroundColor: homecarousel.background }"
        >
          <div class="d-flex align-center justify-center h-100">
            <div class="text-center">
              <h2 class="text-uppercase text-white text-h4 font-weight-bold">
                {{ homecarousel.title }}
              </h2>
              <p class="text-h6 font-weight-bold my-5 text-white">
                {{ homecarousel.description }}
              </p>
              <v-btn class="bg-primary mt-3" flat>
                <img src="/public/assets/shop.png" alt="Shop" />
                <span class="text-uppercase ml-2">Shop now</span>
              </v-btn>
            </div>

            <v-card
              class="position-absolute card-item px-5 bg-transparent animate__hinge"
              flat
            >
              <div class="bg-white px-8 py-6 text-center font-weight-bold">
                <p class="text-grey-darken-4">{{ homecarousel.promoTitle }}</p>
                <p class="text-red font-weight-bold mt-2">
                  {{ homecarousel.promoDiscount }}
                </p>
              </div>
              <div class="bg-secondnav px-8 py-2 text-center">
                <span class="text-subtitle-2 font-weight-bold">{{
                  homecarousel.promoDuration
                }}</span>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import data from "@/data.json"
export default {
  data() {
    return {
      homecarousels:data.homecarousels
    };
  },
};
</script>

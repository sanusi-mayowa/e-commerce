<template>
  <div class="my-16 bg-carousel" style="width: 100% !important">
    <v-carousel height="220" cycle interval="3000" show-arrows="hover" progress="pink-lighten-3" hide-delimiters>
      <v-carousel-item v-for="slide in slides" :key="slide" :style="{backgroundImage: `url(${slide.image})`}">
        <v-sheet
        :style="{backgroundColor: slide.background}"
          class="d-flex justify-space-evenly ga-2 align-center px-16"
        >
          <div>
            <p
              class="text-uppercase text-slide mb-1"
              style="font-weight: 500 !important"
            >
              {{ slide.name }}
            </p>
            <span style="font-size: 15px !important">{{
              slide.description
            }}</span>
          </div>
          <div>
            <img :src="slide.img" alt="" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  data() {
    return {
      slides: data.slides,
    };
  },
};
</script>

<template>
  <div class="trendingsales">
    <div class="px-16 pt-16 bg-white">
      <div class="d-flex align-center justify-space-between text-grey-darken-4">
        <h4>Top 100</h4>
        <span class="font-weight-bold cursor-pointer">View All</span>
      </div>
      <v-row>
        <v-col md="3" v-for="hundred in hundreds" :key="hundred">
          <v-card class="bg-white mt-5">
            <img :src="hundred.img" alt="" width="100%" />
            <div class="px-5">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <p class="font-weight-bold text-subtitle-1">
                    {{ hundred.name }}
                  </p>
                </div>
                <v-btn variant="plain">
                  <img src="/public/assets/like.png" alt="" />
                </v-btn>
              </div>
              <small class="text-grey font-weight-bold">{{
                hundred.description
              }}</small>
              <div class="d-flex align-center ga-2 mt-2 py-1">
                <img :width="80" src="/public/assets/ratings.png" alt="" />
                <span class="text-grey" style="font-size: 12px">
                  ({{ hundred.rating }})</span
                >
              </div>
              <div class="d-flex align-center ga-2 mt-2">
                <span class="text-red font-weight-bold">{{
                  hundred.price
                }}</span>
                <span class="text-grey">{{ hundred.oldPrice }}</span>
                <small class="text-red font-weight-bold">{{
                  hundred.discount
                }}</small>
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
  name: "TrendingSales",
  data() {
    return {
      hundreds: data.hundreds,
    };
  },
};
</script>

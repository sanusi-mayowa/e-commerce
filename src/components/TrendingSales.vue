<template>
  <div class="trendingsales">
    <div class="px-16 pt-16 bg-white">
      <div class="d-flex align-center justify-space-between text-grey-darken-4">
        <h4>Trending must-haves</h4>
        <span class="font-weight-bold cursor-pointer">View All</span>
      </div>
      <v-row class="position-relative">
        <v-col md="4" v-for="trending in trendings" :key="trending">
          <div class="pt-5 position-relative">
            <img
              :src="trending.img"
              alt=""
              width="100%"
              style="border-top-left-radius: 8px; border-top-right-radius: 8px"
              class="position-relative"
            />
            <img
              :src="trending.arrival"
              alt=""
              class="position-absolute top-20 left-0 mt-2 ml-3"
            />
            <div
              class="bg-trending px-5 mt-n2 py-3"
              style="
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
              "
            >
              <div class="d-md-flex justify-space-between cool">
                <div>
                  <p style="font-size: 13px">{{ trending.name }}</p>
                  <small class="text-grey">{{ trending.description }}</small>
                </div>
                <div>
                  <v-btn
                    variant="outlined"
                    flat
                    >{{ trending.btn }}</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
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
      trendings: data.trendings,
    };
  },
};
</script>

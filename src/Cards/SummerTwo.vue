<template>
  <div class="summer">
    <div class="px-16 pt-16 bg-white summer-main">
      <v-row class="summer-row">
        <v-col cols="12">
          <div class="d-flex">
            <div class="bg-summerone px-2 d-flex align-center" style="width: 100%">
              <div class="summer-side">
                <h1 class="text-white" style="font-size: 15px !important">
                  Never-Ending Summer
                </h1>
                <span
                  class="mt-2 text-grey-lighten-2 d-block"
                  style="font-size: 13px; font-weight: 400"
                >
                  Throwback Shirts & all-day dressed
                </span>
                <v-btn
                  style="font-size: 7px !important"
                  size="small"
                  class="text-grey-lighten-2 ms-n1 mt-1"
                  flat
                  variant="outlined"
                  >Explore all category</v-btn
                >
              </div>
            </div>
            <div class="summer-side-img">
              <img src="/public/assets/summer-1.png" alt="" height="100%" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex">
            <div class="bg-summerfour px-2 d-flex align-center" style="width: 72%">
              <div class="summer-">
                <h1 class="text-white" style="font-size: 15px !important">
                  The most famous sport brands
                </h1>
                <span
                  class="mt-2 text-grey-lighten-2 d-block"
                  style="font-size: 11.5px; font-weight: 400"
                >
                  Get in gym essentials
                </span>
                <v-btn
                  class="text-grey-lighten-2 bg-blue ml-n1 mt-3"
                  variant="outlined"
                  flat
                  style="font-size: 8px"
                  size="small"
                  >Explore all category</v-btn
                >
              </div>
            </div>
            <div class="summer-side-img">
              <img
                src="/public/assets/mobile-summer.png"
                alt=""
                height="100%"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummerTwo",
  data() {
    return {};
  },
};
</script>

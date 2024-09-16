<template>
  <div class="summer">
    <div class="px-16 pt-16 bg-white summer-main">
      <div class="summer-row d-flex justify-center ga-4">
        <div>
          <div class="d-flex">
            <div
              class="bg-summerone px-5 ex d-flex align-center"
              style="width: 100% !important"
            >
              <div class="summer-side">
                <h1 class="text-white mt-n16">Never-Ending Summer</h1>
                <p
                  class="mt-5 text-grey-lighten-2"
                  style="font-size: 18px; font-weight: 400"
                >
                  Throwback Shirts & all-day dressed
                </p>
                <v-btn
                  class="text-grey-lighten-2 mt-3"
                  flat
                  size="small"
                  variant="outlined"
                  >Explore all category</v-btn
                >
              </div>
            </div>
            <div class="summer-side-img">
              <img src="/public/assets/summer-1.png" alt="" height="100%" />
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <div
              class="bg-summertwo ex px-5 ex-main d-flex align-center"
              style="height: 390px !important; width: 100%"
            >
              <div class="summer-side">
                <h1 class="text-white mt-n16" style="font-size: 29px">
                  The most famous sport brands
                </h1>
                <p
                  class="mt-5 text-grey-lighten-2"
                  style="font-size: 18px; font-weight: 400"
                >
                  Get in gym essentials
                </p>
                <v-btn
                  class="text-grey-lighten-2 mt-3"
                  flat
                  variant="outlined"
                  size="small"
                  >Explore all category</v-btn
                >
              </div>
            </div>
            <div class="summer-side-img img-blue">
              <img
                src="/public/assets/summer-2.png"
                alt=""
                style="height: 390px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summer",
  data() {
    return {};
  },
};
</script>

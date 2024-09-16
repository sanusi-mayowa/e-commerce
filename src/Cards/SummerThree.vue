<template>
  <div class="summer">
    <div class="px-16 pt-16 bg-white summer-main">
      <div class="summer-row d-flex justify-center ga-4">
        <div>
          <div class="d-flex">
            <div
              class="bg-summerthree px-5 ex d-flex align-center"
              style="height: 347px; width: 100% !important"
            >
              <div class="summer-side">
                <h1 class="text-white mt-n16">The Pinky Barbie Edition</h1>
                <p
                  class="mt-5 text-grey-lighten-2"
                  style="font-size: 18px; font-weight: 400"
                >
                  Lets play dress up
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
              <img src="/public/assets/summer-3.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <div
              class="bg-summerfour px-5 d-flex align-center"
              style="height: 347px; width: 100% !important"
            >
              <div class="summer-side">
                <h1 class="text-white mt-n16" style="font-size: 29px">
                  Best Sellers Everyone Love
                </h1>
                <p
                  class="mt-5 text-grey-lighten-2"
                  style="font-size: 18px; font-weight: 400"
                >
                  poolside glam include
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
            <div class="summer-side-img">
              <img src="/public/assets/summer-4.png" alt="" />
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

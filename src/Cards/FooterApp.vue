<template>
  <div style="margin-top: 120px !important; position: relative !important">
    <v-card
      class="bg-footercard rounded footercard px-8 py-5 text-center"
      width="500"
    >
      <div>
        <h2>Luminae <span class="text-grey-lighten-3">Store</span></h2>
        <span class="text-subtitle-2 text-grey-lighten-3"
          >Register your email not to miss the last minutes off + Free
          delivery</span
        >
        <div
          class="d-flex justify-space-between mt-2 align-center px-2 py-1 rounded bg-white w-75"
          style="margin: auto"
        >
          <input
            type="text"
            class="bg-transparent border-0 px-3 py-2 text-grey"
            style="outline: none"
            placeholder="Enter your email"
          />
          <v-btn flat variant="plain"
            ><img :width="20" height="20" src="/public/assets/send.png" alt=""
          /></v-btn>
        </div>
      </div>
    </v-card>
    <v-footer class="bg-footer position-relative">
      <div class="footer-main mx-16">
          <div>
                        <v-list-item to="/home">lllllllllllllllllll</v-list-item>
                     </div>
          <!-- ============================== -->
          <div>
                        <v-list-item to="/home">lllllllllllllllllll</v-list-item>
                     </div>
          <!-- ============================== -->
          <div>
                        <v-list-item to="/home">lllllllllllllllllll</v-list-item>
                     </div>
          <!-- ============================== -->
          <div>
                        <v-list-item to="/home">lllllllllllllllllll</v-list-item>
                     </div>
          <!-- ============================== -->
        </div>
    </v-footer>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  name: "FooterApp",
  data() {
    return {
      footerlinks: data.footerlinks,
    };
  },
};
</script>

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
      <div class="footer-main mx-16 px-16">
        <div class="pt-6">
          <span class="text-grey-darken-5 font-weight-bold ml-4">Company</span>
          <v-list-item
            to="/aboutus"
            class="mt-2"
            style="font-size: 14px !important"
            >About us</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Our Store</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Contact Us</v-list-item
          >
        </div>
        <!-- ============================== -->
        <div class="pt-6">
          <span class="text-grey-darken-4 font-weight-bold ml-4"
            >Career Opportunities</span
          >
          <v-list-item
            to="/home"
            class="mt-2"
            style="font-size: 14px !important"
            >Selling Programs</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Advertise</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Cooperation</v-list-item
          >
        </div>
        <!-- ============================== -->
        <div class="pt-6">
          <span class="text-grey-darken-4 font-weight-bold ml-4"
            >How to buy</span
          >
          <v-list-item
            to="/home"
            class="mt-2"
            style="font-size: 14px !important"
            >Market Payments</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Delivery Options</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Buyer Protection</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >New User Guide</v-list-item
          >
        </div>
        <!-- ============================== -->
        <div class="pt-6">
          <span class="text-grey-darken-4 font-weight-bold ml-4">Help</span>
          <v-list-item
            to="/home"
            class="mt-2"
            style="font-size: 14px !important"
            >Contact Us</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >FAQ</v-list-item
          >
          <v-list-item to="/home" style="font-size: 14px !important"
            >Privacy Policy</v-list-item
          >
        </div>
        <!-- ============================== -->
      </div>
    </v-footer>
    <section class="bg-white mt-8">
      <div class="mx-10 px-10">
        <div
          class="d-flex align-center"
          style="
            justify-content: space-between !important;
            width: 100% !important;
          "
        >
          <div class="last-footer-img">
            <img src="/public/assets/payment methods.png" alt="" />
          </div>
          <div>
            <select class="text-grey-darken-4 px-4 last-footer cursor-pointer">
              <option
                v-for="language in languages"
                :key="language"
                class="cursor-pointer"
              >
                {{ language.text }}
              </option>
            </select>
          </div>
        </div>
        <hr class="mb-3 mt-1 last-footer" flat />
        <div
          class="d-flex align-center justify-space-between mt-2"
          style="flex-wrap: wrap !important"
        >
          <span
            class="text-grey-darken-4 last-footer"
            style="font-size: 13px; font-weight: 500"
            >165-179 Foster Road City Of Monarch, Melbourne Austraila</span
          >
          <span
            class="text-grey last-footer"
            style="font-size: 13px; font-weight: 500"
          >
            &copy 2023 Copyright in reserved for luminae shop
          </span>
          <div class="d-flex align-center social last-footer">
            <v-btn flat variant="plain" v-for="social in socials" :key="social">
              <img :src="social.avatar" alt="" />
            </v-btn>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import data from "@/data.json";

export default {
  name: "FooterApp",
  data() {
    return {
      languages: data.languages,
      socials: data.socials,
    };
  },
};
</script>

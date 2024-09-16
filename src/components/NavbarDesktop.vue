<template>
  <v-app-bar class="bg-white first-nav" flat>
    <section
      class="d-flex align-center justify-space-evenly top-nav"
    >
      <div class="d-flex align-center ga-6 logo ml-n2">
        <div class="d-flex align-center ga-2 cursor-pointer">
          <img src="/public/assets/logo.png" width="40" alt="" />
          <h3 class="font-weight-bold text-grey-darken-4">Luminae</h3>
        </div>
        <div class="input-section d-flex align-center border-thin px-2 rounded">
          <input
            type="text"
            class="border-none categories-input py-2 px-2 text-grey"
            placeholder="Search Product"
          />
          <v-btn class="text-grey" style="font-size: 11px !important">
            All categories

            <v-menu activator="parent" flat>
              <v-list class="bg-grey-darken-3">
                <v-list-item
                  v-for="category in categories"
                  :key="category"
                  :to="category.route"
                  router
                >
                  <v-list-item-title class="text-center text-white">{{
                    category.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
          <v-btn variant="plain" class="border-s-md"
            ><img src="/public/assets/search.png" class="cursor-pointer" alt=""
          /></v-btn>
        </div>
      </div>
      <div class="d-flex align-center logo">
        <v-list nav class="d-flex align-center mt-1">
          <v-list-item
            v-for="link in links"
            :key="link"
            :to="link.route"
            router
          >
            <v-list-item-title class="text-grey">{{
              link.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <div class="d-flex align-center social">
          <v-btn flat variant="plain" v-for="social in socials" :key="social">
            <img :src="social.avatar" alt="" />
          </v-btn>
        </div>
      </div>
    </section>
  </v-app-bar>
  <v-app-bar class="bg-secondnav py-1 second-nav-main" flat>
    <v-row class="pl-14 pr-2 mx-4 second-nav d-flex align-center">
      <v-col md="4" class="d-flex align-center">
        <div class="d-flex ga-1 align-center cursor-pointer">
          <img
            src="/public/assets/categories-icon.png"
            width="20"
            height="18"
            alt=""
          />
          <h4 class="font-weight-bold text-white">Categories</h4>
        </div>
        <select class="text-grey px-5 cursor-pointer">
          <option v-for="option in options" :key="option">
            {{ option.text }}
          </option>
        </select>
        <select class="text-grey px-4 cursor-pointer">
          <option v-for="language in languages" :key="language">
            {{ language.text }}
          </option>
        </select>
      </v-col>
      <v-col md="5" class="second-nav-main-item">
        <div
          class="d-flex align-center px-5 border-s-md men border-info border-e-md ga-2 justify-center"
        >
          <img src="/public/assets/Men cosmetic.png" alt="" />
          <div>
            <p>Weekly Men's Toiletries Coupons.</p>
            <span class="text-grey"
              >We extend exclusive discounts to our male clientele</span
            >
          </div>
        </div>
      </v-col>
      <v-col md="3">
        <v-list nav class="d-flex align-center">
          <v-list-item
            v-for="secondlink in secondlinks"
            :key="secondlink"
            :to="secondlink.route"
            router
          >
            <div class="d-flex align-center sign">
              <img :src="secondlink.avatar" width="20" alt="" />
              <v-list-item-title class="text-white">{{
                secondlink.text
              }}</v-list-item-title>
            </div>
          </v-list-item>
          <v-list-item
            v-for="cart in carts"
            :key="cart"
            :to="cart.route"
            router
          >
            <div class="d-flex align-center ga-1">
              <img src="" alt="" />
              <v-list-item-title class="text-white">{{
                cart.text
              }}</v-list-item-title>
              <img :src="cart.avatar" alt="" />
            </div>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-app-bar flat class="third-main">
    <section class="px-4 mx-4 third">
      <v-list
        nav
        class="d-flex align-center bg-white mt-3 justify-space-evenly"
      >
        <v-list-item
          v-for="thirdlink in thirdlinks"
          :key="thirdlink"
          :to="thirdlink.route"
          router
        >
          <div class="d-flex align-center ga-1">
            <v-list-item-title class="text-grey">{{
              thirdlink.text
            }}</v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </section>
  </v-app-bar>
</template>

<script>
import data from "@/data.json";
export default {
  name: "NavbarDesktop",
  data() {
    return {
      categories: data.categories,
      links: data.links,
      socials: data.socials,
      options: data.options,
      languages: data.languages,
      secondlinks: data.secondlinks,
      carts: data.carts,
      thirdlinks: data.thirdlinks,
    };
  },
};
</script>

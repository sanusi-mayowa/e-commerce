<template>
  <v-app-bar app class="mobile" prominent flat>
    <div class="d-flex alig-center mobile-nav pe-3">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="d-flex align-center ga-2 cursor-pointer">
        <img src="/public/assets/logo.png" width="40" alt="" />
        <h3 class="font-weight-bold text-grey-darken-4">Luminae</h3>
      </div>
      <v-spacer></v-spacer>
      <div class="mt-2">
        <v-btn to="/cart">
          <img src="/public/assets/cart.png" alt="cart" />
          <img src="/public/assets/cart-progress.png" alt="" class="ml-2" />
        </v-btn>
      </div>
    </div>
    <div
      class="input-section d-flex align-center border-thin px-2 rounded mt-3 mx-5"
    >
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
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary persistent>
    <div class="d-flex justify-center">
      <v-list nav>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.route"
          router
        >
          <template v-slot:prepend>
            <img :src="link.avatar" />
          </template>
          <v-list-item-title class="text-black">{{
            link.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import data from "@/data.json";
export default {
  name: "NavbarMobile",
  data() {
    return {
      drawer: false,
      categories: data.categories,
    };
  },
  methods: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

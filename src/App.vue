<template>
  <v-app>
    <div class="desktop">
      <NavbarDesktop />
    </div>
    <div class="mobile">
      <NavbarMobile />
    </div>
    <v-main>
      <router-view />
    </v-main>
    <div>
      <FooterApp />
    </div>
  </v-app>
</template>

<script>
import NavbarDesktop from "@/components/NavbarDesktop.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import FooterApp from "./Cards/FooterApp.vue";

export default {
  components: {
    NavbarMobile,
    NavbarDesktop,
    FooterApp,
  },
};
</script>

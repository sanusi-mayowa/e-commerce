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
    <div class="footer">
      <FooterApp />
    </div>
  </v-app>
</template>

<script>
import NavbarDesktop from "@/components/NavbarDesktop.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import FooterApp from './Cards/FooterApp.vue';
export default {
 data() {
    return {
      components: {
        NavbarDesktop,
        NavbarMobile,
        FooterApp,
      },
    };
  },
};
</script>

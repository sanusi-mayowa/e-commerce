import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/Home.vue";
import Signin from "@/pages/Signin.vue";
import { components } from "vuetify/dist/vuetify-labs.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

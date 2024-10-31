import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
const app = createApp(App);

AOS.init({
  offset: 120,
  delay: 200,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

registerPlugins(app);

app.mount("#app");

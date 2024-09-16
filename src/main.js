import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import 'animate.css';

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

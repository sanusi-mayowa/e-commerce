import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          // primary: "#000",
          summerone: "#BF2E3B",
          summertwo: "#1D5159",
          summerthree: "#D11FB5",
          summerfour: "#0186C4",
          carousel: "#F7DDD0",
          footer: "#D1E2EB",
          footercard: "#7296AB",
          trending: "#262626",
          top: "#4172DC",
          secondnav: "#262626",
          slide: "#465D6B",
        },
      },
    },
  },
});

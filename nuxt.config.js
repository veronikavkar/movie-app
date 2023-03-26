export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "lesson-nuxt2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: { color: "#c92502" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/fonts/nunito.css",
    "@/assets/default.css",
  ],

  axios: {
    baseURL: process.env.API_URL,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios.js", "~plugins/vuetify.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/vuetify",
    "nuxt-material-design-icons-iconfont",
  ],
  bootstrapVue: {
    icons: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
};

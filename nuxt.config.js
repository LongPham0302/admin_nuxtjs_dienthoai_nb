// nuxt.config.js

module.exports = {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  env: {
    apiUrl: process.env.apiUrl,
  },
  generate: {
    fallback: true,
  },
  ssr: false,
  css: [
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  alias: {
    "@components": "~/components",
    "@plugins": "~/plugins",
    "@pages": "~/pages",
    "@store": "~/store",
  },
  modules: [
    "cookie-universal-nuxt", // Thêm module cookie-universal-nuxt vào đây
  ],
  /*
   ** Headers of the page
   */
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    standalone: true,
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
      config.resolve.alias["~components"] = "@/components";
    },
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.config.js",
        autoprefixer: {},
        "postcss-preset-env": {
          autoprefixer: { grid: true },
        },
      },
    },
  },
  router: {
    middleware: "authenticated",
  },
  plugins: [
    // Other plugins
    { src: "@/plugins/vue-fragment.js", mode: "client" },
  ],
};

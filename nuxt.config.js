module.exports = {
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
  },
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
};

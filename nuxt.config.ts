// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@pinia/nuxt"],
  css: [
    "~/app/styles/main.scss",
  ],
  app: {
    head: {
      title: "Tapir test "
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: false }
})

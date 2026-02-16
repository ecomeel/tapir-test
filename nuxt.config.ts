export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@pinia/nuxt"],
  css: [
    "~/app/styles/main.scss",
  ],
  app: {
    head: {
      title: "Tapir test",
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap'
        }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/shared/config/styles" as *;'
        }
      }
    }
  },
  devtools: { enabled: false }
})

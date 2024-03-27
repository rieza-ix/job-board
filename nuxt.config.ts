// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Job Posting Board",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale-1" },
        { name: "description", content: "Job Posting Board meta desc" },
      ],
    },
  },
});

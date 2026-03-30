// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/scss/main.scss'],
  app: {
    head: {
      title: 'cFAQ | Home',
    },
  },
  modules: ['@nuxt/image', '@nuxt/hints', '@prisma/nuxt'],
});

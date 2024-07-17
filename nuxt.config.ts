// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-08',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],
  imports: {
    autoImport: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ['~/assets/scss/global.scss'],
})

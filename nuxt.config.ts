import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-08',
  ssr: true,
  devtools: {
    enabled: true,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@dargmuesli/nuxt-cookie-control',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: Explanation of why the error is necessary
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  imports: {
    autoImport: true,
    dirs: ['./utils/', './utils/api', './store/'],
  },
  build: {
    transpile: ['vuetify'],
  },
  colorMode: {
    dataValue: 'theme',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ['~/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import '~/assets/scss/theme/_theme.scss';
        `,
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

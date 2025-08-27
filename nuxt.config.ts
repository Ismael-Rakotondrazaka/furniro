// https://nuxt.com/docs/api/configuration/nuxt-config
/* eslint-disable nuxt/nuxt-config-keys-order */
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/scss/main.scss'],

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'always-multiline',
        indent: 2,
        quotes: 'single',
        semi: true,
      },
    },
  },

  fonts: {
    defaults: {
      weights: [400, 700],
    },
  },

  icon: {
    customCollections: [
      {
        dir: './assets/icons',
        normalizeIconName: true,
        prefix: 'internal',
      },
    ],
    mode: 'svg',
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/test-utils',
  ],
});

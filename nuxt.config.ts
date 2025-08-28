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
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  ogImage: {
    enabled: false,
  },

  runtimeConfig: {
    public: {
      appUrl: 'http://localhost:3000',
    },
  },

  site: {
    defaultLocale: 'en',
    description:
      'Discover our collection of furniture and home accessories. Find the perfect piece for your home.',
    indexable: true,
    name: 'Furniro',
  },
});

import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Winona title',
      charset: 'utf-8',
      viewport: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0',
    },
  },
  plugins: ['~/plugins/maska'],
  modules: ['@pinia/nuxt'],
  css: ["~/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/base/_functions.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    stripe_sk: process.env.STRIPE_SECRET_KEY_TEST,
    public: {
      stripe_pk: process.env.STRIPE_PUBLIC_KEY_TEST,
    },
  },
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_ltaJgnJ6mhUSb8txyagX8KX6xEwNOQHI6x1iU12ePDj',
      api_host: 'https://watermelon.dreamdigital.uk',
      posthogDefults: '2025-05-24'
    }
  },

  devtools: { 
    enabled: true 
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  nitro: {
    prerender: {
      routes: [
        '/HireMe',
        '/WebDevQuestionaire'
      ]
    }
  },
  app: {
    head: {
      script: [{src:"https://cdn-cookieyes.com/client_data/bbc51d5d201c3f0970882d4f/script.js"}],
      htmlAttrs: {
        lang: 'en-GB',
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_5959shz4bJ263tqEKgsKy6UEt3rXLY1qXNcXUewvMic',
      posthogHost: 'https://eu.i.posthog.com'
    }
  },

  devtools: { 
    enabled: true 
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/gtm'
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
    },
  },
  gtm: {
    id: process.env.GTM_ID, // Use environment variables for your GTM ID
    // Additional options (optional)
    enabled: true,
    debug: false,
    layer: 'dataLayer',
    pageTracking: true,
    respectDoNotTrack: false,
    scriptDefer: false
  },
  plugins: [
    { src: '~/plugins/gtm.ts', mode: 'client' }
  ]
})

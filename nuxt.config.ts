// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || 'phc_ltaJgnJ6mhUSb8txyagX8KX6xEwNOQHI6x1iU12ePDj',
      posthogHost: process.env.NUXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      posthogDefaults: '2025-05-24',
    }
  },

  devtools: { 
    enabled: true 
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@netlify/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  site: {
    name: 'Dream Digital',
    url: 'https://dreamdigital.uk/',
  },

   robots: {
    sitemap: 'https://dreamdigital.uk/sitemap.xml'
  },

  nitro: {
    static: true,
    prerender: {
      routes: [
        '/HireMe',
        '/',
        '/DigitalClarityChecklist',
        '/QRChecklist',
        //'/WebDevQuestionaire'
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

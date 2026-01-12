// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || 'phc_ltaJgnJ6mhUSb8txyagX8KX6xEwNOQHI6x1iU12ePDj',
      posthogHost: process.env.NUXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      posthogDefaults: '2025-05-24',
    }
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      }
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
    '@nuxt/image',
  ],

  site: {
    name: 'Dream Digital',
    url: 'https://dreamdigital.uk/',
  },

   robots: {
    sitemap: 'https://dreamdigital.uk/sitemap.xml'
  },

  nitro: {
    prerender: {
      routes: [
        '/hire-me',
        '/',
        '/digital-clarity-checklist',
        '/qr-checklist',
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
      meta: [
        {
          name: 'description',
          content:
            'Friendly UK-based digital support for small businesses. Email and domain setup, automations, AI tools, and ongoing tech help. Get started today.'
        }
      ]
    },
  },
})

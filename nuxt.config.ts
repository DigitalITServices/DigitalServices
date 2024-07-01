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
   // "@weareheavy/nuxt-cookie-consent"
  ],

  /* cookieConsent: {
    provider: 'cookiescript',
    id: 'a8d3c8226c608440504943f60d0dd3a9', // Replace with you "id" from CookieScript
    dev: true,
     scripts: {
      necessary: [
        {
          id: 'necessary',
          innerHTML: 'console.log("necessary")',
          type: 'text/javascript',
        },
      ],
      functional: [
        {
          id: 'functional',
          innerHTML: 'console.log("functional")',
          type: 'text/javascript',
        },
      ],
      statistic: [
        {
          id: 'statistic',
          innerHTML: 'console.log("statistic")',
          type: 'text/javascript',
        },
      ],
      marketing: [
        {
          id: 'marketing',
          innerHTML: 'console.log("marketing")',
          type: 'text/javascript',
        },
      ],
    }, 
  }, */

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
      script: [{src: "https://www.iubenda.com/privacy-policy/97489543/cookie-policy" //"https://cdn-cookieyes.com/client_data/d6f0c1a00dd0dc1726c250ea/script.js"
        }],
    },
  },
})

/*<!-- Start cookieyes banner --> <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/d6f0c1a00dd0dc1726c250ea/script.js">
</script>*/
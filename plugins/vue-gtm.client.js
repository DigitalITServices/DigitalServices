import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  
    nuxtApp.vueApp.use(
      createGtm({
        id: process.env.GTM_KEY, // Your GTM ID
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: nuxtApp.$router,
      })
    );
});
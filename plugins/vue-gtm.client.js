import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  
    nuxtApp.vueApp.use(
      createGtm({
        id: 'GTM-TDKHCZTB', // Your GTM ID
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: nuxtApp.$router,
      })
    );
});
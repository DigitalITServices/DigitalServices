import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  
    nuxtApp.vueApp.use(
      createGtm({
        id: 'G-YD3CG2PXXW', // Your GTM ID
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: nuxtApp.$router,
      })
    );
});
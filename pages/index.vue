
import CookieBanner from '~/components/CookieBanner.vue';
<template>
    <div class="relative bg-gray-50">
        <Header />
        <CookieBanner />
    <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block text-red-700 xl:inline">Dream Digital </span> <br>
          <span class="block xl:inline xl:text-5xl">All your Digital needs <br> in one place</span>
        </h1>
        
       <!--<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">-->
          <p class="p-9 text-xl text-gray-500">
            Here at RaspiKidd we simplify your digital needs by creating bespoke social media templates, and 
            websites. 
          </p>

          <p class="p-9 text-xl text-gray-500">
            We even remove the pain of creating bespoke business signage for trade fairs by helping you 
            transfer your logos into lovely laser-engraved signs. These could even be made into Keyrings 
            and coasters for your customers.
          </p>
          <div class="rounded-md shadow sm:mt-0 sm:ml-3">
            <NuxtLink to="/Design" style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 18px" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
              Find out more
            </NuxtLink>
          </div>
        <!--</div>-->
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/home.jpg" alt="Kerry creating AI workflows." />
        <p class="absolute bottom-0 right-0 text-xs text-gray-600 p-2 bg-white bg-opacity-75">Photo credit: The Strathearn Snapper</p>
      </div>
  </main>
</div>
  <!--footer -->
   <Footer />
  </template>

  
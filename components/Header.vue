<template>
      <div class="relative bg-gray-200 shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <NuxtLink to="/">
                <span class="sr-only">DreamDigital By RaspiKidd</span>
                <!-- <img class="h-20 w-auto sm:h-40" src="/public/images/DreamDigitalLogo.svg" alt="Dream Digital logo, small business tech support"> -->
                <NuxtImg 
                  src="/images/DreamDigitalLogo.svg" 
                  alt="Dream Digital logo, small business tech support" 
                  width="100" 
                  height="100"
                  format="webp"
                  loading="lazy" />
              </NuxtLink>
            </div>
            
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" class="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span class="sr-only">Open menu</span>
              </button>
            </div>
  
            <!-- Desktop Menu -->
            <nav class="hidden md:flex space-x-10">
              <NuxtLink to="/services" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
                Services
              </NuxtLink>
      
              <NuxtLink to="/about" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
                About
              </NuxtLink>

              <!--<NuxtLink to="/blog" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
                Blog
              </NuxtLink>-->
  
              <NuxtLink to="/hire-me" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
                Hire Us
              </NuxtLink>
            </nav>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="https://app.simplymeet.me/dream-digital/discovery-call" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f3ede4" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Book a Call
                </a>
              </div>
            </div>
        <!-- Desktop Menu END -->
        </div>
        <!-- Mobile Menu -->
        <div class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black bg-gray-200 ring-opacity-5 divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <NuxtLink to="/">
                  <NuxtImg 
                    src="/images/DreamDigitalLogo.svg" 
                    alt="Dream Digital logo, small business tech support" 
                    width="100" 
                    height="100"
                    format="webp"
                    loading="lazy" />
                  </NuxtLink>
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <a href="https://app.simplymeet.me/dream-digital/discovery-call" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bae7f" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        Book a Call
                      </a>
                    </div>
                  </div>
                  <div class="-mr-2">
                    <button type="button" @click="isOpen = !isOpen" class="rounded-md p-2 inline-flex items-center justify-center hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                      <span class="sr-only">Open menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                    <transition
                      enter-active-class="duration-200 ease-out"
                      enter-class="opacity-0 scale-95"
                      enter-to-class="opacity-100 scale-100"
                      leave-active-class="duration-100 ease-in"
                      leave-class="opacity-100 scale-100"
                      leave-to-class="opacity-0 scale-95"
                    >
                    <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                      <div class="rounded-md bg-gray-200 shadow-xs">
                        <div class="mt-6">
                          <nav class="grid gap-y-8">
                            <NuxtLink to="/services" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                              <div class="ml-4">
                                <p class="text-base font-medium">
                                  Services
                                </p>
                              </div>
                            </NuxtLink>
          
                            <NuxtLink to="/about" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                              <div class="ml-4">
                                <p class="text-base font-medium">
                                  About
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="/hire-me" class="text-base font-medium hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                              <div class="ml-4">
                                <p class="text-base font-medium">
                                  Hire Us
                                </p>
                              </div>
                            </NuxtLink>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
    export default {
        name: "Header",
        data: () => ({
            isOpen: false,
        })
    };
</script>
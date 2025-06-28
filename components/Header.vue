<template>
      <div class="relative bg-gray-200 shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <NuxtLink to="/">
                <span class="sr-only">DreamDigital By RaspiKidd</span>
                <img class="h-8 w-auto sm:h-20" src="/public/images/DreamDigitalLogo.svg" alt="Dream Digital By RaspiKidd Logo">
              </NuxtLink>
            </div>
            
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" class="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span class="sr-only">Open menu</span>
              </button>
            </div>
  
            <!-- Desktop Menu -->
            <nav class="hidden md:flex space-x-10">
              <!--<div class="relative">
  
                <button type="button" @click="isOpen =!isOpen" class="group bg-gray-200 rounded-md text-gray-700 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300">
                  <span> Services </span>
                  <svg class="ml-2 h-5 w-5 text-gray-700 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
  
                <transition
                  enter-active-class="transition ease-out duration-200 transform"
                  enter-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                    <div class="rounded-md bg-gray-200 shadow-xs">
                      <!-- Snipped
                      <div class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div class="relative grid gap-6 bg-gray-200 px-5 py-6 sm:gap-8 sm:p-8">
                        
                            <NuxtLink to="/WebDesign" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                              </svg>
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Web Design
                                </p>
                                <p class="mt-1 text-sm text-gray-700">
                                  From content to full websites we do it all.
                                </p>
                              </div>
                            </NuxtLink>

                            <NuxtLink to="/Design" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
                              </svg>
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Graphic Design
                                </p>
                                <p class="mt-1 text-sm text-gray-700">
                                  From social media templates to Laser cut signs.
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="/Editing" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                              </svg>
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Editing
                                </p>
                                <p class="mt-1 text-sm text-gray-700">
                                  Text and Video editing available.
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="/ComputerRepair" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                              </svg>
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Computer Repair
                                </p>
                                <p class="mt-1 text-sm text-gray-700">
                                  From a slow computer to a system not turning on we can help.
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="SoftwareInstall" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                              </svg>
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Software Install
                                </p>
                                <p class="mt-1 text-sm text-gray-700">
                                  From Windows to Office.
                                </p>
                              </div>
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>-->
              <NuxtLink to="/Services" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300">
                Services
              </NuxtLink>
      
              <NuxtLink to="/About" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300">
                About
              </NuxtLink>
  
              <NuxtLink to="/HireMe" class="text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300">
                Hire Us
              </NuxtLink>
            </nav>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="https://app.simplymeet.me/raspikidd/discovery-call" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38bdf8" class="size-6">
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
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                  <div class="flex items-center justify-between">
                    <NuxtLink to="/">
                      <img class="h-8 w-auto sm:h-10" src="/public/images/DreamDigitalLogo.svg" alt="Logo">
                    </NuxtLink>
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="https://app.simplymeet.me/raspikidd/discovery-call" target="_blank" class="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                          Book a Call
                        </a>
                      </div>
                    </div>
                    <div class="-mr-2">
                      <button type="button" @click="isOpen = !isOpen" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                          <div class="rounded-md bg-white shadow-xs">
                            <div class="mt-6">
                              <nav class="grid gap-y-8">
                                <NuxtLink to="/WebDesign" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                  </svg>
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Web Design
                                    </p>
                                  </div>
                                </NuxtLink>

                                <NuxtLink to="/Design" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
                                  </svg>
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Graphic Design
                                    </p>
                                  </div>
                                </NuxtLink>
          
                                <NuxtLink to="/Editing" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                  </svg>
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Editing
                                    </p>
                                  </div>
                                </NuxtLink>
  
                                <NuxtLink to="/ComputerRepair" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                  </svg>
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Computer Repair
                                    </p>
                                  </div>
                                </NuxtLink>
  
                                <NuxtLink to="/SoftwareInstall" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#76B82A" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                                  </svg>
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Software Install
                                    </p>
                                  </div>
                                </NuxtLink>
          
                                <NuxtLink to="/About" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-600">
                                      About
                                    </p>
                                  </div>
                                </NuxtLink>
  
                                 <NuxtLink to="/HireMe" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-600">
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
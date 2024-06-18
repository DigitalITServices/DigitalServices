<template>
    
      <div class="relative bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <NuxtLink to="/">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-20" src="/images/RaspiKidd.svg" alt="Logo">
              </NuxtLink>
            </div>
            
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span class="sr-only">Open menu</span>
              </button>
            </div>
  
            <!-- Desktop Menu -->
            <nav class="hidden md:flex space-x-10">
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button type="button" @click="isOpen =!isOpen" class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span> Services </span>
                  <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                    <div class="rounded-md bg-white shadow-xs">
                      <!-- Snipped  -->
                      <div class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        
                            <NuxtLink to="/WebDesign" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <img class="flex-shrink-0 h-6 w-6" src="/images/webDev.svg" alt="WebDev">
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Web Design
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                  From content to full websites we do it all.
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="/Editing" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <img class="flex-shrink-0 h-6 w-6" src="/images/editing.svg" alt="Editing">
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Editing
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                  Text and Video editing available.
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="/ComputerRepair" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <img class="flex-shrink-0 h-6 w-6" src="/images/computerRepair.svg" alt="CompRepair">
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Computer Repair
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                  From a slow computer to a system not turning on we can help.
                                </p>
                              </div>
                            </NuxtLink>
  
                            <NuxtLink to="SoftwareInstall" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <img class="flex-shrink-0 h-6 w-6" src="/images/softwareInstall.svg" alt="SoftwareInstall">
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  Software Install
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
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
              </div>
          
              <NuxtLink to="/About" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                About
              </NuxtLink>
  
              <NuxtLink to="/HireMe" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Hire Us
              </NuxtLink>
            </nav>
        <!-- Desktop Menu END -->
      </div>
    <!-- Mobile Menu -->
    <div class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                  <div class="flex items-center justify-between">
                    <a href="#">
                      <img class="h-8 w-auto sm:h-10" src="/images/RaspiKidd.svg" alt="Logo">
                    </a>
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
                                  <img class="flex-shrink-0 h-6 w-6" src="/images/webDev.svg" alt="WebDev">
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Web Design
                                    </p>
                                  </div>
                                </NuxtLink>
          
                                <NuxtLink to="/Editing" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <img class="flex-shrink-0 h-6 w-6" src="/images/editing.svg" alt="Editing">
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Editing
                                    </p>
                                  </div>
                                </NuxtLink>
  
                                <NuxtLink to="/ComputerRepair" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <img class="flex-shrink-0 h-6 w-6" src="/images/computerRepair.svg" alt="CompRepair">
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Computer Repair
                                    </p>
                                  </div>
                                </NuxtLink>
  
                                <NuxtLink to="/SoftwareInstall" class="rounded-t bg-white hover:bg-gray-400 -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <img class="flex-shrink-0 h-6 w-6" src="/images/softwareInstall.svg" alt="SoftwareInstall">
                                  <div class="ml-4">
                                    <p class="text-base font-medium text-gray-900">
                                      Software Install
                                    </p>
                                  </div>
                                </NuxtLink>
          
                                <NuxtLink to="/About" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                  About
                                </NuxtLink>
  
                                 <NuxtLink to="/HireMe" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                  Hire Us
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
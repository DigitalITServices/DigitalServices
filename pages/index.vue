<template>
    <div class="relative bg-gray-50">
        <Header />
    <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block text-red-700 xl:inline">Dream Digital </span> <br>
          <span class="block xl:inline xl:text-5xl">All your Digital needs <br> in one place</span>
        </h1>
        
        <div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">
          <div class="rounded-md shadow sm:mt-0 sm:ml-3">
            <router-link to="/WebDesign" style ="background-color:#76B82A;" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
              Web Design
            </router-link>
          </div>
         <div class="rounded-md shadow sm:mt-0 sm:ml-3">
            <router-link to="/Editing" style ="background-color:#76B82A;" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
              Editing
            </router-link>
          </div>
          <div class="rounded-md shadow sm:mt-0 sm:ml-3">
            <router-link to="/ComputerRepair" style ="background-color:#76B82A;" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
              Computer Repair
            </router-link>
          </div>
          <div class="rounded-md shadow sm:mt-0 sm:ml-3">
            <router-link to="/SoftwareInstall" style ="background-color:#76B82A;" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md text-black md:py-4 md:text-lg md:px-4">
              Software Install
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="/images/home.jpg" alt="home page image">
      </div>
  </main>
</div>
  <!--footer -->
   <Footer />
  </template>

  
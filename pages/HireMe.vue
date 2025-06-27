<template>
  <Header />
  
  <div class="relative isolate bg-zinc-100">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
          </div>
          <h1 class="text-3xl tracking-tight font-extrabold text-sky-600 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            Let's Work Together
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">To solve your business digital needs </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Phone Number</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7c3aed" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </dt>
              <dd><a class="hover:text-gray-900" href="tel:07848692935">07848 692 935</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7c3aed" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </dt>
              <dd><a class="hover:text-gray-900" href="mailto:srvices@raspikidd.com">services@raspikidd.com</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Opening</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7c3aed" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </dt>
              <dd>Mon-Fri 10am to 6pm GMT</dd>
            </div>
          </dl>
        </div>
      </div>
      <!-- Contact Form -->
      <contact-form />
    </div>
  </div>
   
  <!-- Testimonials -->
  <section class="bg-zinc-100">
    <div class="max-w-7xl mx-auto md:grid md:grid-cols-1 md:px-6 lg:px-8">
      <br> <h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-violet-500">
        Testimonials
      </h2>
    </div>
      
    <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-grey-400 lg:pr-16">
        <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
          <div class="relative text-lg font-medium text-gray-700 md:flex-grow">
            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
    
            <p class="relative">
              Kerry has been a life saver in several instances for both my personal and business IT needs. Among other things she has helped me with:
            </p>

            <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 384 512" class="flex-shrink-0 h-6 w-6">
                <path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"/>
              </svg>
              <span class="ml-8 text-lg text-gray-700">
                expert advice on IT purchases: PCs, laptops, and components (additional RAM, external hard drives)
              </span>
            </div>

            <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 384 512" class="flex-shrink-0 h-6 w-6">
                <path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"/>
              </svg>
              <span class="ml-8 text-lg text-gray-700">
                upgrading / building hardware
              </span>
            </div>

            <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 384 512" class="flex-shrink-0 h-6 w-6">
                <path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"/>
              </svg>
              <span class="ml-8 text-lg text-gray-700">
                troubleshooting computer and wifi malfunction
              </span>
            </div>

            <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 384 512" class="flex-shrink-0 h-6 w-6">
                <path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"/>
              </svg>
              <span class="ml-8 text-lg text-gray-700">
                complete Windows reinstall and software optimisation
              </span>
            </div>

            <div class="-m-3 p-3 ml-4 mt-3 flex items-start rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 384 512" class="flex-shrink-0 h-6 w-6">
                <path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"/>
              </svg>
              <span class="ml-8 text-lg text-gray-700">
                Wordpress setup and optimisation
              </span>
            </div>

            <p style ="text-align: justify;" class="mt-6 relative">
              Working with Kerry has been a pleasure. Her service is professional and timely. She quickly diagnoses what the problem is, explains it in non-techy language, and states what needs to be done to fix it within budget. You won't get sold stuff you don't need! In short, she takes the fear out of IT troubles and tech gibberish, and provides expert advice and solutions that work. Kerry will be my go-to person for all my future IT needs.
            </p>
          </div>
            
          <footer class="mt-8">
            <div class="flex items-start">
              <!--<div class="flex-shrink-0 inline-flex rounded-full border-2 border-red-500">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=kMf6WlMMZH&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </div> -->
                
              <div class="ml-4">
                <div class="text-base font-medium text-grey-900">
                  Anonymous
                </div>
                  
                <!--<div style ="color:#76B82A;" class="text-base font-medium">
                  Renew Your Body
                </div> --> 
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
        
      <!-- <div class="py-12 px-4 border-t-2 border-red-600 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
        <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
          <div class="relative text-lg font-medium text-black md:flex-grow">
            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-300" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          
            <p class="relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
            </p>
          </div>
        
          <footer class="mt-8">
            <div class="flex items-start">
              <div class="flex-shrink-0 inline-flex rounded-full border-2 border-red-500">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixqx=kMf6WlMMZH&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </div>
                
              <div class="ml-4">
                <div class="text-base font-medium text-black">
                  Joseph Rodriguez
                </div>
                  
                <div style ="color:#D02530;" class="text-base font-medium text-red-500">
                  CEO, Workcation
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div> -->
    </div>
  </section>

  <!-- Footer -->
  <Footer />
</template>
<script setup>
  // Component Imports
  // import { ContactForm } from "#build/components";
  import Contactform from "~/components/ContactForm.vue";
</script>
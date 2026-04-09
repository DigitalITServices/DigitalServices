<template>
  <div class="bg-orange-50 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 class="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:col-span-7">
            Want product news and updates? Sign up for our newsletter.
        </h2>
        <p class="max-w-xl tracking-tight text-balance text-lg font-medium text-pretty sm:text-xl/8 lg:col-span-7">
            You will also get a free copy of our "Digital Clarity Checklist" when you subscribe!
      </p>
      <form class="w-full max-w-md lg:col-span-5 lg:pt-2" name="Newsletter" method="POST" netlify>
        <input type="hidden" name="form-name" value="Newsletter" />
        <div class="flex gap-x-4">
            <label for="name" class="sr-only">
                Name
            </label>
            <input id="name" name="name" type="text" autocomplete="name" required class="min-w-0 flex-auto rounded-md bg-gray-200 border-2 px-3.5 py-2 text-base outline-1 -outline-offset-1 border-green-600 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" placeholder="Enter your Name" />
            <label for="email-address" class="sr-only">
                Email address
            </label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md bg-gray-200 border-2 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 border-green-600 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" placeholder="Enter your email" />
            <button type="submit" class="flex-none rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                Subscribe
            </button>
        </div>
        <div class="mt-4">
            <input type="checkbox" id="checkbox" v-model="checked" required />
            <label for="checkbox"> We care about your data. Accept our
                 <a href= "/Privacy-Policy.pdf" class=" font-medium hover:text-green-700" target="_blank"> 
                    Privacy Policy. 
                </a> 
                {{ }}
            </label>
          </div>
        
      </form>
    </div>
  </div>
</template>

<script setup>
    const checked = ref(false)
</script>
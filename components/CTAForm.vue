<template>
  <div class="bg-fuchsia-100 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 class="max-w-xl text-3xl font-semibold tracking-tight text-balance text-sky-700 sm:text-4xl lg:col-span-7">
            Get our free Digital Clarity Checklist Straight to your inbox
        </h2>
      <form class="w-full max-w-md lg:col-span-5 lg:pt-2" name="LandingPage" method="POST" netlify>
        <input type="hidden" name="form-name" value="LandingPage" />
        <div class="flex gap-x-4">
            <label for="name" class="sr-only">
                Name
            </label>
            <input id="name" name="name" type="text" autocomplete="name" required class="min-w-0 flex-auto rounded-md bg-zinc-100 border-2 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 border-sky-700 outline-violet-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" placeholder="Enter your Name" />
            <label for="email-address" class="sr-only">
                Email address
            </label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md bg-zinc-100 border-2 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 border-sky-700 outline-violet-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" placeholder="Enter your email" />
            <button type="submit" class="flex-none rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
                Send me the Checklist
            </button>
        </div>
        <div class="mt-4">
            <input type="checkbox" id="checkbox" v-model="checked" required />
            <label for="checkbox"> We care about your data. Accept our
                 <a href= "/Privacy-Policy.pdf" class="text-gray-900 font-medium hover:text-sky-700" target="_blank"> 
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
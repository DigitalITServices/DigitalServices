
<!--import CookieBanner from '~/components/CookieBanner.vue'; -->
<template>
    <div class="relative bg-zinc-100">
        <Header />
        <!--<CookieBanner />-->
    <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block text-sky-900 xl:inline">Dream </span> 
          <span class="block text-green-900 xl:inline">Digital </span> <br>
          <span class="block text-sky-700 xl:inline xl:text-5xl">Making tech easy </span> <br>
          <span class="block text-violet-700 xl:inline xl:text-5xl">for everyday founders</span>
        </h1>
        
       <!--<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">-->
          <p class="p-9 text-xl text-gray-600">
            We don’t believe in bamboozling clients with acronyms or one size fits all systems. Instead, we meet you where you are, 
            listen to what you need, and build you a system that’s tailored, tidy, and totally manageable.
          </p>

          <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-sky-700 sm:text-5xl">
                  What We Can Help You With
          </h2>

          <ul role="list" class="mt-8 space-y-8 text-gray-700 text-xl">
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7c3aed" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              <span>
                <strong class="font-semibold text-sky-700">
                  Email & Domain Setup:
                </strong> 
                Get a professional email address and domain that makes your business look legit from day one.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7c3aed" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>


              <span>
                <strong class="font-semibold text-sky-700">
                  Website Setup & Support:
                </strong> 
                Simple, effective websites that show off what you do without the hassle.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7c3aed" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <span>
                <strong class="font-semibold text-sky-700">
                   CRM & Automation Tools:
                </strong> 
                Automate your client onboarding, scheduling, and follow-ups so nothing slips through the cracks.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="#7c3aed" viewBox="0 0 24 24" class="size-10">
                <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free-->
                <path d="M8.5 10A1.5 2 0 1 0 8.5 14 1.5 2 0 1 0 8.5 10z"></path>
                <path d="M15.5 10A1.5 2 0 1 0 15.5 14 1.5 2 0 1 0 15.5 10z"></path>
                <path d="M8 16H16V18H8z"></path>
                <path d="m21,11v-3c0-1.1-.9-2-2-2h-6v-1.39c.3-.27.5-.67.5-1.11,0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5,1.5c0,.44.2.84.5,1.11v1.39h-6c-1.1,0-2,.9-2,2v3c-.55,0-1,.45-1,1v4c0,.55.45,1,1,1v3c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-3c.55,0,1-.45,1-1v-4c0-.55-.45-1-1-1ZM5,20v-12h14v4s0,0,0,0v4s0,0,0,0v4s-14,0-14,0Z"></path>
              </svg>

              <span>
                <strong class="font-semibold text-sky-700">
                   AI Integration:
                </strong> 
                Add smart tools to your workflow (like chatbots, email drafts, or idea generators) to save time and stress.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#7c3aed" viewBox="0 0 24 24" class="size-10">
              <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free-->
              <path d="m19,2H5c-.55,0-1,.45-1,1v4h-2v2h2v2h-2v2h2v2h-2v2h2v4c0,.55.45,1,1,1h14c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Zm-13,2h8v16H6V4Zm13,16h-3V4h3v16Z"></path>
              </svg>

              <span>
                <strong class="font-semibold text-sky-700">
                   Notion Dashboards & Systems:
                </strong> 
                Custom Notion workspaces to run your whole business from one calm, organised place.
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="#7c3aed" viewBox="0 0 24 24" class="size-10">
                <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free-->
                <path d="M11 7h2v4.5h-2zM11 13h2v2h-2z"></path><path d="M12 3C6.49 3 2 6.59 2 11c0 2.91 1.9 5.51 5 6.93V23l5.34-4c5.36-.14 9.66-3.67 9.66-8s-4.49-8-10-8m0 14h-.33L9 19v-2.42l-.64-.25C5.67 15.29 4 13.25 4 10.99c0-3.31 3.59-6 8-6s8 2.69 8 6-3.59 6-8 6Z"></path>
              </svg>

              <span>
                <strong class="font-semibold text-sky-700">
                   Ongoing Tech Support & Training:
                </strong> 
                Think of us as your friendly freelance IT department — here when you need a fix, a nudge, or a walkthrough.
              </span>
            </li>
          </ul>


         <!-- <div class="rounded-md shadow sm:mt-0 sm:ml-3">
  
            <NuxtLink to="/Design" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-base rounded-md rounded-md bg-violet-600 hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 text-white md:py-4 md:text-lg md:px-4">
              Find out more
            </NuxtLink>
          </div>-->
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <!-- <img class="absolute inset-0 w-full h-full object-cover" src="/images/home.jpg" alt="Kerry creating AI workflows." /> -->
        <NuxtImg 
          src="/images/home.jpg" 
          alt="Kerry creating AI workflows." 
          class="absolute inset-0 w-full h-full object-cover" 
          format="webp"
          loading="lazy" />
        <p class="absolute bottom-0 right-0 text-xs text-gray-600 p-2 bg-white bg-opacity-75">Photo credit: The Strathearn Snapper</p>
      </div>
  </main>
</div>
  <!--Newsletter -->
  <newsletter-form />
  <!--footer -->
   <Footer />
  </template>

  <script setup>
    useHead({
      title: 'Digital Support for Small Businesses | Dream Digital',
      meta: [
        { name: 'description', content: 'Friendly UK-based digital support for small businesses. Email and domain setup, smart automations, AI tools, and ongoing tech help. Get started today.' },
        { name: 'keywords', content: 'digital support for small businesses, freelance IT support UK, tech help for non-technical founders' },
        { name: 'author', content: 'Kerry Kidd' },
        //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Dream Digital - Home' },
        { property: 'og:description', content: 'Friendly UK-based digital support for small businesses. Email and domain setup, smart automations, AI tools, and ongoing tech help. Get started today.' },
        { property: 'og:image', content: '/images/home.jpg' },
        { property: 'og:url', content: 'https://dreamdigital.uk' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
  </script>
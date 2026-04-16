
<!--import CookieBanner from '~/components/CookieBanner.vue'; -->
<template>
    <div class="relative">
      <Header />
      
      <main class="lg:relative">
        <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-30 lg:text-center">
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block text-sky-900 xl:inline">Dream </span> 
              <span class="block text-green-900 xl:inline">Digital </span> <br>
              <span class="block xl:inline xl:text-5xl">Your business tech, simplified</span>
            </h1>
        
            <!--<div class="grid grid-cols-2 grid-rows-2 gap-2 place-items-auto h-30 mt-10 sm:ml-3">-->
            <p class="p-9 text-xl text-bold text-gray-900">
              Too many tools? Messy systems? <br>
              I help small business owners fix what’s not working and make everything run smoothly.
            </p>
            <!-- CTA Section -->
            <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-emerald-50">
              <div class="mx-auto max-w-2xl lg:mx-0">
                <h3 class="text-pretty tracking-tight">
                  Get your setup sorted
                </h3>
                <p class="mt-3 text-lg/8">
                  Not sure where to start? Let’s simplify it.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                    Book a Free Clarity Call
                  </a>
                  <NuxtLink to="/digital-clarity-checklist" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
                    Download the Checklist
                  </NuxtLink>  
                </div>
              </div>
            </div>

            <h2 class="mt-12 text-pretty tracking-tight">
              They don’t have a tech problem
            </h2>
            <h3 class="mt-8 text-pretty text-gray-800 tracking-tight">
              They have too many tools and no clear system
            </h3>

            <p class="mt-3 flex">
              This is what it usually looks like:
            </p>

            <ul role="list" class="mt-8 space-y-8">
              <li class="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                  <path d="M16.5 7.5h-9v9h9v-9Z" />
                  <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                </svg>

                <span>
                  Things live in too many places
                </span>
              </li>
              <li class="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                  <path d="M16.5 7.5h-9v9h9v-9Z" />
                  <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                </svg>

                <span>
                  Nothing connects
                </span>
              </li>
              <li class="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                  <path d="M16.5 7.5h-9v9h9v-9Z" />
                  <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                </svg>

                <span> 
                  You’re wasting time on admin
                </span>
              </li>
            </ul>

            <form class="tiers pt-12 sm:pt-16">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl text-center">
                  <h2 class="mt-2 tracking-tight text-balance">
                    How I Help
                  </h2>
                </div>
                <p class="mx-auto mt-6 max-w-2xl text-center text-pretty">
                  Simple, practical support to get your tech working properly.
                </p>
                <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
                  <div v-for="tier in pricing.tiers" :key="tier.id" class="group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
                    <div class="flex items-center justify-between gap-x-4">
                      <h3 :id="`tier-${tier.id}`" class="text-center text-xl/8">
                        {{ tier.name }}
                      </h3>
                    </div>
                    <p class="mt-4 text-sm/6">
                      {{ tier.description }}
                    </p>
              <!--<p class="text-center mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl tracking-tight">{{ tier.price }}</span>
              </p>
              <ul role="list" class="mt-8 space-y-3 text-sm/6">
                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              
              <NuxtLink :to="`/${tier.id}`" :aria-describedby="`tier-${tier.id}`" class="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white ring-1 ring-green-200 ring-inset bg-green-600">
                Find Out More →
              </NuxtLink> -->
            </div>
          </div>
        </div>
      </form>

      <h2 class="mt-12 tracking-tight text-balance">
        How it Works
      </h2>
      <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
        Step 1: 
        <span class="text-gray-800"> 
          We look at what you’ve got
        </span>
      </h3>
      <p class="mt-3 text-left">
        A quick review of your current setup so we can see what’s working and what’s not
      </p>
      <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
        Step 2: 
        <span class="text-gray-800"> 
          We simplify it
        </span>
      </h3>
      <p class="mt-3 text-left">
        We remove what you don’t need and organise what stays
      </p>
      <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
        Step 3: 
        <span class="text-gray-800"> 
          We make it work properly
        </span>
      </h3>
      <p class="mt-3 text-left">
        Everything is set up so it runs smoothly without you thinking about it
      </p>

      <!-- CTA Section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-emerald-50">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h3 class="text-pretty tracking-tight">
            Get your setup sorted
          </h3>
          <p class="mt-3 text-lg/8">
            Not sure where to start? Let’s simplify it.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
              Book a Free Clarity Call
            </a>
            <NuxtLink to="/digital-clarity-checklist" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
              Download the Checklist
            </NuxtLink>  
          </div>
        </div>
      </div>
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
        <p class="absolute bottom-0 right-0 text-xs text-gray-600 p-2 bg-white bg-opacity-75">
          Photo credit: The Strathearn Snapper
        </p>
      </div>
  </main>
</div>
  <!--Newsletter -->
  <newsletter-form class="mt-10" />
  <!--footer -->
   <Footer />
  </template>

  <script setup>
  const pricing = {
  tiers: [
    {
      name: 'Get a website that actually brings enquiries',
      id: 'website-setup',
      //price: '£497',
      description: 'A clean, simple site that clearly explains what you do and makes it easy for people to get in touch',
      //features: [
        //'Domain & Email Setup', 
        //'Website builder install/template', 
        //'Business email flows'
      //],
      //button: 'Find Out More →',
      //featured: false,
    },
    {
     name: 'Stop wasting time on messy systems',
      id: 'tech-support-plan',
      //price: '£997',
      description: 'We organise and simplify your setup so everything is in the right place and easy to use',
      /*features: [
        'Custom Notion Dashboards',
        'Client Portal',
        'Business wiki & Task Tracker', 
      ],*/
      //featured: false,
    },
    {
      name: 'Have someone to rely on when things break',
      id: 'system-clean-up',
      price: '£1,497',
      description: 'Ongoing support so your systems stay organised and nothing piles up',
      features: [
        'CRM Setup', 
        'Automation Workflows', 
        'AI Productivity tools'
      ],
      //featured: true,
    },
  ],
}
    useHead({
      title: 'Digital Support for Small Businesses | Dream Digital',
      meta: [
        { name: 'description', content: 'Friendly UK-based digital support for small businesses. Email and domain setup, smart automations, AI tools, and ongoing tech help. Get started today.' },
        { name: 'keywords', content: 'digital support for small businesses, freelance IT support UK, tech help for non-technical founders' },
        { name: 'author', content: 'Kerry Kidd' },
        //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:description', content: 'Friendly UK-based digital support for small businesses. Email and domain setup, smart automations, AI tools, and ongoing tech help. Get started today.' },
        { property: 'og:image', content: '/images/home.jpg' },
        { property: 'og:url', content: 'https://dreamdigital.uk' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
    useSeoMeta({
      title: 'Digital Support for Small Businesses | Dream Digital',
      ogTitle: 'Digital Support Made Simple for Small Businesses'
    });
  </script>
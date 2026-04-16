<template>
  <Header />
  <div class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="tracking-tight">
        Fix Your Business Tech in 10 Steps
      </h1>
      <h2 class="mt-10 tracking-tight text-gray-800">
       A simple checklist to cut the chaos and get your setup working properly
      </h2>
      <p class="mt-8 text-pretty">
        Too many tools, messy systems, and no clear setup?
      </p>
      <p class="mt-8 text-pretty">
        This checklist will help you quickly spot what’s not working and where to simplify.
      </p>
    </div>
    <cta-form class="mt-10" />
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div class="col-span-2">
            <!-- <h2 class="text-base/7 font-semibold text-indigo-600">Everything you need</h2> -->
            <h2 class="tracking-tight text-pretty">
              Sound Familiar?
            </h2>
          </div>
          <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 sm:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-9">
              <dt class="font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute top-1 left-0 size-8 text-green-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {{ feature.name }}
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="tracking-tight text-pretty">
              What’s Inside the Checklist
            </h2>
            <ul role="list" class="mt-8 space-y-8">
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                <path d="M16.5 7.5h-9v9h9v-9Z" />
                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
              </svg>
              <span>
                A simple way to review your current setup
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                <path d="M16.5 7.5h-9v9h9v-9Z" />
                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
              </svg>
              <span>
                Clear checks across email, website, and tools
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                <path d="M16.5 7.5h-9v9h9v-9Z" />
                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
              </svg>

              <span>
                A quick way to spot what’s slowing you down
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                <path d="M16.5 7.5h-9v9h9v-9Z" />
                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
              </svg>

              <span>
                Simple next steps to improve things
              </span>
            </li>
          </ul>
        </div>
      </div>
      <img src="/images/ChecklistMockup.png" alt="Digital Clarity Checklist on laptop" class="inset-0 w-75 h-75" />
    </div>
  </div>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="col-span-2">
         <!-- <h2 class="text-base/7 font-semibold text-indigo-600">Everything you need</h2> -->
          <h2 class="tracking-tight text-pretty">
            What this helps you do
          </h2>
        </div>
        <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 sm:grid-cols-2 lg:gap-y-16">
          <div v-for="item in items" :key="item.name" class="relative pl-9">
            <dt class="font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute top-1 left-0 size-8 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
              {{ item.name }}
            </dt>
            <!--<dd class="mt-2">{{ feature.description }}</dd>-->
          </div>
        </dl>
      </div>
      <h2 class="tracking-tight text-center mt-12">
       Get your Setup Sorted
      </h2>
      <p class="mt-8 text-pretty">
        Start with a simple checklist and see what’s working and what’s not.
      </p>
      <cta-form class = "mt-8"/>
    </div>
  </div>
</div>
<Footer />
</template>

<script setup>
const features = [
  {
    name: 'You’ve got tools everywhere',
    
  },
  { name: 'Nothing quite connects',
  },
  { name: 'You’re wasting time on admin',
  },
  { name: 'You’re not sure what you actually need',
  },]

  const items = [
  {
    name: 'Get clarity on your setup',
    
  },
  { name: 'Reduce unnecessary tools',
  },
  { name: 'Save time on admin',
  },
  { name: 'Feel more in control of your business tech',
  },]

   useHead({
      title: 'Digital Clarity Checklist - Dream Digital',
      meta: [
        { name: 'description', content: 'Dream Digital - Making tech easy for everyday founders. We provide tailored digital solutions including website setup, CRM tools, AI integration, and ongoing support.' },
        { name: 'keywords', content: 'digital services, website setup, CRM tools, AI integration, Notion dashboards, tech support, email setup, domain setup' },
        { name: 'author', content: 'Kerry Kidd' },
        //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Digital Clarity Checlist' },
        { property: 'og:description', content: 'Making tech easy for everyday founders with tailored digital solutions.' },
        { property: 'og:image', content: '/images/home.jpg' },
        { property: 'og:url', content: 'https://dreamdigital.uk/digital-clarity-checklist' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
  
</script>